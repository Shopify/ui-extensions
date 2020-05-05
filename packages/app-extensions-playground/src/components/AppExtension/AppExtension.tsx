import React, {useEffect, useMemo, useState} from 'react';
import {RemoteReceiver, RemoteRenderer} from '@shopify/remote-ui-react/host';
import {createWorkerFactory, useWorker} from '@shopify/react-web-worker';
import {Action} from '@shopify/remote-ui-core';
import {Spinner, Stack, Modal, TextContainer, DisplayText, Icon, Button} from '@shopify/polaris';
import {
  ExtensionPoint,
  ExtractedInputFromRenderExtension,
  RenderExtensionComponentProps,
  CallbackTypeForExtensionPoint,
  Layout,
  LayoutInput,
  LayoutHandler,
  SessionTokenInput,
  createIframeWorkerMessenger,
} from '@shopify/app-extensions-renderer';
import {retain} from '@shopify/remote-ui-core';

import useResizeObserver from './utils/ResizeObserver';
import {ArgoHeader} from '../containers/shared/Header';

const {default: ErrorMonitorImage} = require('../../assets/images/error-monitor.png');

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
}: RenderExtensionComponentProps<T>) {
  const [loading, setLoading] = useState(true);
  const worker = useWorker(createWorker, {
    createMessenger: createIframeWorkerMessenger,
  });
  const [receiver, isRenderTimedOut] = useRenderTimeout(
    useMemo(() => new RemoteReceiver(), []),
    5000,
  );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const userInput = useMemo(() => input, [JSON.stringify(input)]);
  const [ref, layoutInput] = useLayoutInput();
  const sessionTokenInput = useSessionTokenInput();
  const localeInput = useMemo(() => ({locale: 'en'}), []);
  const [renderTimeoutModalOpen, setRenderTimeoutModalOpen] = useState(isRenderTimedOut);

  useEffect(() => {
    setRenderTimeoutModalOpen(isRenderTimedOut);
  }, [isRenderTimedOut]);

  const inputs = useMemo(() => {
    if (!layoutInput) {
      return undefined;
    }
    return {...userInput, ...layoutInput, ...sessionTokenInput, ...localeInput};
  }, [layoutInput, sessionTokenInput, userInput, localeInput]);

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
      if (!script || !inputs) {
        return;
      }
      await worker.render(extensionPoint, inputs, Object.keys(components), receiver.receive);
      setLoading(false);
    })();
  }, [script, worker, extensionPoint, components, receiver, inputs]);

  if (!script) {
    return null;
  }

  return (
    <div ref={ref}>
      {loading && (
        <Stack distribution="center" alignment="center">
          <Spinner />
        </Stack>
      )}
      <RenderErrorModal
        open={renderTimeoutModalOpen}
        onClose={() => setRenderTimeoutModalOpen(false)}
      />
      <RemoteRenderer receiver={receiver} components={components} />
    </div>
  );
}

function RenderErrorModal({open, onClose}: {open: boolean; onClose: () => void}) {
  return (
    <Modal
      large
      open={open}
      onClose={onClose}
      title={<ArgoHeader appName="my" title="Create subscription plan" />}
    >
      <Modal.Section>
        <Stack distribution="center" alignment="center">
          <Stack.Item>
            <TextContainer>
              <DisplayText>
                There's a problem loading
                <br />
                this app
              </DisplayText>

              <Button outline>Get Support</Button>
            </TextContainer>
          </Stack.Item>
          <Stack.Item>
            <img src={ErrorMonitorImage} alt="Error Monitor" />
          </Stack.Item>
        </Stack>
      </Modal.Section>
    </Modal>
  );
}

function useRenderTimeout(
  receiver: RemoteReceiver,
  timeoutInMillis: number,
  deps: any[] = [],
): [RemoteReceiver, boolean] {
  const [isRenderTimedOut, setIsRenderTimedOut] = useState(false);
  const [isRenderTimeoutEnabled, setIsRenderTimeoutEnabled] = useState(true);

  useEffect(() => {
    setIsRenderTimeoutEnabled(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  useEffect(() => {
    if (!isRenderTimeoutEnabled) {
      return;
    }
    const id = setTimeout(() => setIsRenderTimedOut(true), timeoutInMillis);
    return () => {
      clearTimeout(id);
    };
  }, [timeoutInMillis, isRenderTimeoutEnabled]);

  useEffect(() => {
    const receive = receiver.receive;
    const wrappedReceive: RemoteReceiver['receive'] = (type, ...args) => {
      if (type === Action.Mount) {
        setIsRenderTimeoutEnabled(false);
      }
      receive(type, ...args);
    };
    Object.assign(receiver, {
      receive: wrappedReceive,
    });
  }, [receiver]);

  return useMemo(() => [receiver, isRenderTimedOut], [receiver, isRenderTimedOut]);
}

function useSessionTokenInput(): SessionTokenInput {
  return useMemo(
    () => ({
      sessionToken: {
        getSessionToken: () => {
          return Promise.resolve(
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaG9wIjoic2hvcDEubXlzaG9waWZ5LmlvIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.DPRpE9-UGNOFtgJV72KfqCfSIde0WW-0snwErCK3mHg',
          );
        },
      },
    }),
    [],
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
  }, [entry, initialData, layout]);

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
  }, [initialData, ref]);
}
