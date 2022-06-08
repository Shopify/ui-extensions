// in worker.ts

import {createRemoteRoot, RemoteRoot, RemoteReceiver} from '@remote-ui/core';

type RenderCallback = (root: RemoteRoot) => void;

let renderCallback: RenderCallback | undefined;

// `self` is a reference to the global object here
(self as any).onRender = (callback: RenderCallback) => {
  renderCallback = callback;
};

// in worker.ts, focusing on the run() export

export function run(script: string, receiver: RemoteReceiver) {
  // This is a global available in workers that will synchronously download
  // and execute the referenced script.
  importScripts(script);

  if (renderCallback != null) {
    const remoteRoot = createRemoteRoot(receiver as any);
    renderCallback(remoteRoot);
  }
}
