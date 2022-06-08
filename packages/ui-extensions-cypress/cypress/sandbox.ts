import {retain, createRemoteRoot, RemoteChannel} from '@remote-ui/core';

import {Card, Button, User, RenderCallback} from './components';

let renderCallback: RenderCallback | undefined;

// We bring third-party code into the environment by running `importScripts()` below.
// We expect that code to call `self.onRender`, which we define below, to register
// to receive the `RemoteRoot` object it needs to start rendering.
Reflect.defineProperty(self, 'onRender', {
  value: (callback: RenderCallback) => {
    renderCallback = callback;
  },
  writable: false,
});

// This method will be exposed to the worker thread by
export function run(script: string, channel: RemoteChannel, user: User) {
  // `channel` is a function, which is proxied over from the main thread. If you ever
  // "hold on" to a function you receive this way in order to call it later, you
  // **must** call `retain()` in order to prevent it from being automatically garbage
  // collected.
  retain(channel);

  // `user` contains functions, so it also needs to be retained.
  retain(user);

  importScripts(script);

  if (renderCallback == null) {
    throw new Error(
      `The ${script} script did not register a callback to render UI. Make sure that code runs self.onRender().`,
    );
  }

  const root = createRemoteRoot(channel, {components: [Card, Button]});

  renderCallback(root, user);
}
