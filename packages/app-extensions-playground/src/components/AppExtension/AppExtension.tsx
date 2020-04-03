import React, {useEffect, useMemo, useState} from 'react';
import {RemoteReceiver, RemoteRenderer} from '@shopify/remote-ui-react/host';
import {createWorkerFactory, useWorker} from '@shopify/react-web-worker';
import {
  ExtensionPoint,
  DataTypeForExtensionCallback,
  CallbackTypeForExtensionPoint,
  Bridge,
  Handler,
} from '@shopify/app-extensions-renderer';
import {retain} from '@shopify/remote-ui-core';

import useResizeObserver from './utils/ResizeObserver';

interface Props<T extends ExtensionPoint> {
  extensionPoint: T;
  script?: URL | string;
  components?: {[key: string]: any};
  data?: DataTypeForExtensionCallback<CallbackTypeForExtensionPoint<T>>;
}

const createWorker = createWorkerFactory(() =>
  import(/* webpackChunkName: 'sandbox-worker' */ './workers/worker'),
);

// See https://github.com/Shopify/app-extension-libs/issues/237#issuecomment-606625111
const SIZE_CLASS_BREAK_POINT = 480;

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
  const [ref, entry] = useResizeObserver();
  const [bridgeData, setBridgeData] = useState<Bridge['initialData']>();
  const [bridgeInitialData, setBridgeInitialData] = useState<Bridge['initialData']>();
  const [bridgeHandler, setBridgeHandler] = useState<Handler>();

  useEffect(() => {
    if (!entry) {
      return;
    }
    const data: Bridge['initialData'] = {
      layout: {
        horizontal: entry.contentRect.width > SIZE_CLASS_BREAK_POINT ? 'regular' : 'compact',
      },
    };
    if (!bridgeInitialData) {
      setBridgeInitialData(data);
    }
    if (JSON.stringify(data) !== JSON.stringify(bridgeData)) {
      setBridgeData(data);
    }
  }, [entry, bridgeHandler]);

  useEffect(() => {
    if (!bridgeData) {
      return;
    }
    const {layout} = bridgeData;
    if (layout) {
      bridgeHandler?.onLayoutChange?.(layout);
    }
  }, [bridgeData]);

  useEffect(() => {
    if (!bridgeInitialData) {
      return;
    }
    (async () => {
      await worker.load(typeof script === 'string' ? script : script.href);
      worker.render(extensionPoint, data, Object.keys(components), receiver.receive, {
        initialData: bridgeInitialData,
        setHandler: handler => {
          retain(handler);
          setBridgeHandler(handler);
        },
      });
    })();
  }, [worker, receiver, bridgeInitialData]);

  return (
    <div ref={ref}>
      <RemoteRenderer receiver={receiver} components={components} />
    </div>
  );
}
