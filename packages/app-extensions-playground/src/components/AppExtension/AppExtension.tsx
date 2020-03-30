import React, {useEffect, useMemo, useState} from 'react';
import {RemoteReceiver, RemoteRenderer} from '@shopify/remote-ui-react/host';
import {createWorkerFactory, useWorker} from '@shopify/react-web-worker';
import {
  ExtensionPoint,
  DataTypeForExtensionCallback,
  CallbackTypeForExtensionPoint,
  Listeners,
} from '@shopify/app-extensions-renderer';
import {retain} from '@shopify/remote-ui-core';

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
  const [listeners, setListeners] = useState<Listeners | undefined>(undefined);

  useEffect(() => {
    (async () => {
      await worker.load(typeof script === 'string' ? script : script.href);
      worker.render(
        extensionPoint,
        data,
        Object.keys(components),
        receiver.receive,
        newListeners => {
          retain(newListeners);
          setListeners(newListeners);
        },
      );
    })();
  }, [worker, receiver]);

  useEffect(() => {
    if (!listeners) {
      return;
    }
    const onResize = () => {
      const {innerWidth: width, innerHeight: height} = window;
      listeners.onLayoutChange &&
        listeners.onLayoutChange({
          sizeClass: {
            h: width > 480 ? 'regular' : 'compact',
            v: height > 480 ? 'regular' : 'compact',
          },
        });
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [listeners]);

  return <RemoteRenderer receiver={receiver} components={components} />;
}
