declare global {
  /**
   * This is defined by webpack DefinePlugin during compile time.
   * It means __hotClientOptions__ won't be an actual var in javascript.
   * Ref https://github.com/webpack-contrib/webpack-hot-client/blob/1b7f221918217be0db7a6089fb77fffde9a973f6/lib/compiler.js#L146
   */
  const __hotClientOptions__: Options;

  /**
   * This is defined by mobile to override default option provided by webpack DefinePlugin.
   * This will be an actual var in javascript at runtime.
   */
  const __hotClientOptionsOverride__: Options | undefined;

  interface WindowOrWorkerGlobalScope {
    readonly shopify: {reload(): void};
  }
}

interface Options {
  https: boolean;
  webSocket: {host: string; port: number; path?: string};
}

interface DevServerMessage<
  Type extends string,
  Data extends Record<string, string[]> = Record<string, never>
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

const hotClientOptionsOverride =
  typeof __hotClientOptionsOverride__ === 'object'
    ? __hotClientOptionsOverride__
    : undefined;
const defaultHotClientOptions =
  typeof __hotClientOptions__ === 'object' ? __hotClientOptions__ : undefined;

const options = {
  ...defaultHotClientOptions,
  ...hotClientOptionsOverride,
  webSocket: {
    ...defaultHotClientOptions?.webSocket,
    ...hotClientOptionsOverride?.webSocket,
  },
} as Options;

const MAX_RETRIES = 10;

let open = false;
let initial = true;
let retry = 0;

connect();

function connect() {
  if (!options.webSocket || typeof WebSocket === 'undefined') return;

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

  const socket = new WebSocket(
    `${options.https ? 'wss' : 'ws'}://${host}:${port}/${path}`,
  );

  const onOpen = () => {
    open = true;
    initial = true;
    retry = 0;
    log('listening for changes...');
  };

  const onClose = () => {
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
      setTimeout(connect, timeout);
    }
  };

  const onMessage = (event: any) => {
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
          console.log(error);
        }
        break;
      }
    }
  };

  socket.addEventListener('open', onOpen);
  socket.addEventListener('message', onMessage);
  socket.addEventListener('close', onClose);

  function destroy() {
    socket.removeEventListener('open', onOpen);
    socket.removeEventListener('message', onMessage);
    socket.removeEventListener('close', onClose);
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
