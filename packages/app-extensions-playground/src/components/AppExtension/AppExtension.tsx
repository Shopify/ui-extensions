import React, {useEffect, useMemo, useState} from 'react';
import {RemoteReceiver, RemoteRenderer} from '@shopify/remote-ui-react/host';
import {
  createWorkerFactory,
  useWorker,
  createIframeWorkerMessenger,
} from '@shopify/react-web-worker';
import {
  ExtensionPoint,
  ExtractedInputFromRenderExtension,
  CallbackTypeForExtensionPoint,
  Layout,
  LayoutInput,
  LayoutHandler,
} from '@shopify/app-extensions-renderer';
import {retain} from '@shopify/remote-ui-core';

import useResizeObserver from './utils/ResizeObserver';

interface Props<T extends ExtensionPoint> {
  extensionPoint: T;
  script?: URL | string;
  components?: {[key: string]: any};
  input?: ExtractedInputFromRenderExtension<CallbackTypeForExtensionPoint<T>>;
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
  input = {} as ExtractedInputFromRenderExtension<CallbackTypeForExtensionPoint<T>>,
}: Props<T>) {
  if (!script) {
    return null;
  }

  const worker = useWorker(createWorker, {
    createMessenger: createIframeWorkerMessenger,
  });
  const receiver = useMemo(() => new RemoteReceiver(), []);
  const [ref, layoutInput] = useLayoutInput();

  useEffect(() => {
    if (!layoutInput) {
      return;
    }
    (async () => {
      await worker.load(typeof script === 'string' ? script : script.href);
      worker.render(
        extensionPoint,
        {...input, ...layoutInput},
        Object.keys(components),
        receiver.receive,
      );
    })();
  }, [worker, receiver, layoutInput]);

  return (
    <div ref={ref}>
      <RemoteRenderer receiver={receiver} components={components} />
    </div>
  );
}

function useLayoutInput(): [ReturnType<typeof useResizeObserver>[0], LayoutInput | undefined] {
  const [ref, entry] = useResizeObserver();
  const [layout, setLayout] = useState<Layout>();
  const [initialData, setInitialData] = useState<Layout>();
  const [layoutHandler, setLayoutHandler] = useState<LayoutHandler>();

  useEffect(() => {
    if (!entry) {
      return;
    }
    const newLayout: Layout = {
      horizontal: entry.contentRect.width > SIZE_CLASS_BREAK_POINT ? 'regular' : 'compact',
    };
    if (!initialData) {
      setInitialData(newLayout);
    }
    if (JSON.stringify(newLayout) !== JSON.stringify(layout)) {
      setLayout(newLayout);
    }
  }, [entry]);

  useEffect(() => {
    if (!layout || !layoutHandler) {
      return;
    }
    layoutHandler.onLayoutChange(layout);
  }, [layout, layoutHandler]);

  return useMemo(() => {
    const layoutInput: LayoutInput | undefined = initialData
      ? {
          layout: {
            initialData: initialData,
            setHandler: newHandler => {
              retain(newHandler);
              setLayoutHandler(newHandler);
            },
          },
        }
      : undefined;
    return [ref, layoutInput];
  }, [initialData]);
}
