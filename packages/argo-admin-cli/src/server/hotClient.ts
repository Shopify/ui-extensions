interface Options {
  https: boolean;
  hmr: boolean;
  reload: boolean;
  webSocket: {host: string; port: number; path?: string};
}

declare global {
  const __hotClientOptions__: Options;

  interface WindowOrWorkerGlobalScope {
    readonly shopify: {reload(): void};
  }
}

const options = typeof __hotClientOptions__ === 'object' ? __hotClientOptions__ : undefined;
const MAX_RETRIES = 10;

interface DevServerMessage<Type extends string, Data extends object = {}> {
  type: Type;
  data: Data;
}

type Message =
  | DevServerMessage<'invalid', {fileName: string}>
  | DevServerMessage<'ok'>
  | DevServerMessage<'window-reload'>
  | DevServerMessage<'errors', {errors: string[]}>
  | DevServerMessage<'warnings', {warnings: string[]}>;

run();

function run({retry = 0} = {}) {
  if (!options || typeof WebSocket === 'undefined') {
    return;
  }

  const {host, port, path} = options.webSocket;

  if (host === '*') {
    throw new Error(
      `Hot client does not support setting the host to "*", because the window’s location is not guaranteed to be available in a worker.`,
    );
  }

  /**
   * This helps to clean up existing WebSocket in case client script is executed more than one.
   */
  (self as any).__destroyHotClientSocket__?.();
  (self as any).__destroyHotClientSocket__ = destroy;

  let open = false;
  const socket = new WebSocket(`${options.https ? 'wss' : 'ws'}://${host}:${port}/${path}`);

  const onClose = () => {
    if (retry > MAX_RETRIES) {
      log(`ending reconnect after ${MAX_RETRIES} attempts`);
      return;
    }

    if (open) {
      open = false;
      log('lost connection to asset server, trying to reconnect...');
      run();
    } else {
      const timeout = 1000 * retry ** 2 + Math.random() * 100;

      log(`attempting reconnect in ${timeout / 1000}s`);

      setTimeout(() => {
        run({retry: retry + 1});
      }, timeout);
    }
  };
  socket.addEventListener('close', onClose);

  const onMessage = (event) => {
    const message = JSON.parse(event.data) as Message;

    switch (message.type) {
      case 'ok':
      case 'warnings': {
        if (open) {
          reload();
        } else {
          open = true;
          log('listening for changes...');
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
          console.log(error);
        }

        break;
      }
    }
  };
  socket.addEventListener('message', onMessage);

  function destroy() {
    socket.removeEventListener('close', onClose);
    socket.removeEventListener('message', onMessage);
    socket.close();
  }
}

function reload() {
  self.shopify.reload();
}

function log(message: string) {
  console.log(`🔭 > ${message}`);
}

export {};
