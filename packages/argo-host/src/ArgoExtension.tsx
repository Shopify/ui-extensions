import React, {useEffect, useMemo} from 'react';
import {
  CallbackTypeForExtensionPoint,
  ExtensionPoint,
  ExtractedInputFromRenderExtension,
} from '@shopify/argo';
import {createWorkerFactory, useWorker} from '@shopify/react-web-worker';
import {retain} from '@shopify/remote-ui-core';
import {RemoteReceiver, RemoteRenderer} from '@shopify/remote-ui-react/host';

import {createIframeWorkerMessenger} from './messenger';

export interface ArgoExtensionsProps<T extends ExtensionPoint> {
  extensionPoint: T;
  script?: URL | string;
  components?: {[key: string]: any};
  input?: ExtractedInputFromRenderExtension<CallbackTypeForExtensionPoint<T>>;
  receiver?: RemoteReceiver;
}

const createWorker = createWorkerFactory(() =>
  import(/* webpackChunkName: 'sandbox-worker' */ './workers/3pWorker'),
);

export function ArgoExtension<T extends ExtensionPoint>({
  extensionPoint,
  script,
  components = {},
  input = {} as ExtractedInputFromRenderExtension<CallbackTypeForExtensionPoint<T>>,
  receiver: externalReceiver,
}: ArgoExtensionsProps<T>) {
  const receiver = useMemo(() => externalReceiver || new RemoteReceiver(), [externalReceiver]);
  const worker = useWorker(createWorker, {
    createMessenger: createIframeWorkerMessenger,
  });

  useEffect(() => {
    (async () => {
      if (!script) {
        return;
      }
      await worker.load(typeof script === 'string' ? script : script.href);
    })();
  }, [script, worker]);

  useEffect(() => {
    (async () => {
      if (!script) {
        return;
      }
      await worker.render(extensionPoint, input, Object.keys(components), (type, ...args) => {
        // Have a proper fix in remote-ui core library later
        // Ref: https://github.com/Shopify/app-extension-libs/issues/436#issuecomment-622008563
        retain(args);
        return receiver.receive(type, ...args);
      });
    })();
  }, [components, extensionPoint, input, receiver, script, worker]);

  if (!script) {
    return null;
  }

  return <RemoteRenderer receiver={receiver} components={components} />;
}
