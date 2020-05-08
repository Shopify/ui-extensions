import React, {useMemo} from 'react';
import {ExtensionPoint} from '@shopify/argo';
import {
  ArgoExtension,
  useLayoutInput,
  useSessionTokenInput,
  useLocaleInput,
  ArgoExtensionsProps,
  createIframeWorkerMessenger,
} from '@shopify/argo-host';
import {createWorkerFactory, useWorker} from '@shopify/react-web-worker';

const createWorker = createWorkerFactory(() =>
  import(/* webpackChunkName: 'sandbox-worker' */ '@shopify/argo-host/worker'),
);

type BaseProps<T extends ExtensionPoint> = Omit<ArgoExtensionsProps<T>, 'input' | 'worker'>;

type Input<T extends ExtensionPoint> = Omit<
  ArgoExtensionsProps<T>['input'],
  'layout' | 'locale' | 'sessionToken'
>;

export interface StandardContainerProps<T extends ExtensionPoint> extends BaseProps<T> {
  app?: {
    name: string;
    icon?: string;
    appId: string;
  };
  input?: Input<T>;
}

export function StandardContainer<T extends ExtensionPoint>(props: StandardContainerProps<T>) {
  const worker = useWorker(createWorker, {
    createMessenger: createIframeWorkerMessenger,
  });
  const [ref, layoutInput] = useLayoutInput();
  const sessionTokenInput = useSessionTokenInput(() => {
    return Promise.resolve(
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaG9wIjoic2hvcDEubXlzaG9waWZ5LmlvIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.DPRpE9-UGNOFtgJV72KfqCfSIde0WW-0snwErCK3mHg',
    );
  }, []);
  const localeInput = useLocaleInput('en');
  const input = useMemo(() => {
    if (!layoutInput) {
      return undefined;
    }
    return {
      ...layoutInput,
      ...sessionTokenInput,
      ...localeInput,
      ...props.input,
    };
  }, [layoutInput, sessionTokenInput, localeInput, props.input]);

  return (
    <div ref={ref}>
      {input && <ArgoExtension {...props} input={input as any} worker={worker} />}
    </div>
  );
}
