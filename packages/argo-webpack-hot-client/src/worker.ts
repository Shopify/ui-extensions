export interface Options {
  https: boolean;
  webSocket: {host: string; port: number; path: string};
}

declare global {
  const __hotClientOptions__: Options;

  interface WindowOrWorkerGlobalScope {
    readonly shopify: {reload(): void};
  }
}

const options = __hotClientOptions__;
const MAX_RETRIES = 10;

interface DevServerMessage<
  Type extends string,
  Data extends Record<string, unknown> = Record<string, unknown>
> {
  type: Type;
  data: Data;
}

type Message =
  | DevServerMessage<'invalid'>
  | DevServerMessage<'ok'>
  | DevServerMessage<'window-reload'>
  | DevServerMessage<'errors', {errors: string[]}>
  | DevServerMessage<'warnings', {warnings: string[]}>;

run();

function run() {
  const {host, port, path} = options.webSocket;

  if (host === '*') {
    throw new Error(
      `@shopify/argo-webpack-hot-client does not support setting the host to "*", because the window’s location is not guaranteed to be available in a worker.`,
    );
  }

  let open = false;
  let initial = true;
  let retry = 0;

  const cleanupActions = new Set<() => void>();

  connect();

  function cleanup() {
    for (const action of cleanupActions) {
      action();
    }

    cleanupActions.clear();
  }

  function connect() {
    const socket = new WebSocket(
      `${options.https ? 'wss' : 'ws'}://${host}:${port}${path}`,
    );

    const handleOpen = () => {
      open = true;
      initial = true;
      retry = 0;
      log('listening for changes...');
    };

    const handleClose = () => {
      cleanup();

      if (retry > MAX_RETRIES) {
        log(`ending reconnect after ${MAX_RETRIES} attempts`);
        return;
      }

      if (open) {
        open = false;
        log('lost connection to asset server, trying to reconnect...');
        connect();
      } else {
        const timeout = 1000 * retry ** 2 + Math.random() * 100;
        retry += 1;

        log(`attempting reconnect in ${timeout / 1000}s`);

        setTimeout(() => {
          connect();
        }, timeout);
      }
    };

    const handleMessage = (event: MessageEvent<any>) => {
      const message = JSON.parse(event.data) as Message;

      switch (message.type) {
        case 'ok':
        case 'warnings': {
          if (initial) {
            initial = false;
          } else {
            reload();
          }
          break;
        }
        case 'window-reload': {
          reload();
          break;
        }
        case 'invalid': {
          log('recompiling...');
          break;
        }
        case 'errors': {
          log('build failed with errors:');

          for (const error of message.data.errors) {
            // eslint-disable-next-line no-console
            console.log(error);
          }

          break;
        }
      }
    };

    socket.addEventListener('open', handleOpen);
    socket.addEventListener('close', handleClose);
    socket.addEventListener('message', handleMessage);

    cleanupActions.add(() => {
      socket.removeEventListener('open', handleOpen);
      socket.removeEventListener('close', handleClose);
      socket.removeEventListener('message', handleMessage);
      socket.close();
    });
  }

  function reload() {
    cleanup();
    self.shopify.reload();
  }
}

function log(message: string) {
  // eslint-disable-next-line no-console
  console.log(`🔭 > ${message}`);
}

export {};
