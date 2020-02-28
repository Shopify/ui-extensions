import React, {useEffect, useMemo} from 'react';
import {RemoteReceiver, RemoteRenderer} from '@shopify/remote-ui-react/host';
import {createWorkerFactory, useWorker} from '@shopify/react-web-worker';
import {
  ExtensionPoint,
  DataTypeForExtensionCallback,
  CallbackTypeForExtensionPoint,
} from '@shopify/app-extensions-renderer';

interface Props<T extends ExtensionPoint> {
  extensionPoint: T;
  script?: URL | string;
  components?: {[key: string]: any};
  data?: DataTypeForExtensionCallback<CallbackTypeForExtensionPoint<T>>;
}

const createWorker = createWorkerFactory(() =>
  import(/* webpackChunkName: 'sandbox-worker' */ './workers/worker'),
);

export function AppExtension<T extends ExtensionPoint>({
  extensionPoint,
  script,
  components = {},
  data = {} as DataTypeForExtensionCallback<CallbackTypeForExtensionPoint<T>>,
}: Props<T>) {
  if (!script) {
    return null;
  }

  const worker = useWorker(createWorker);
  const receiver = useMemo(() => new RemoteReceiver(), []);

  useEffect(() => {
    (async () => {
      await worker.load(typeof script === 'string' ? script : script.href);
      worker.render(extensionPoint, data, Object.keys(components), receiver.receive);
    })();
  }, [worker, receiver]);

  return <RemoteRenderer receiver={receiver} components={components} />;
}
