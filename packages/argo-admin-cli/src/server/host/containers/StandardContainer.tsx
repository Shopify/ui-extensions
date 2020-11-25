import React, {useMemo, useState} from 'react';
import {ExtensionPoint} from '@shopify/argo-admin';
import {
  ArgoExtension,
  ArgoExtensionsProps,
  ReadyState,
  useLayoutApi,
  useLocaleApi,
  useSessionTokenApi,
} from '@shopify/argo-admin-host';
import {createWorkerFactory, createIframeWorkerMessenger} from '@remote-ui/web-workers';
import {useWorker} from '@remote-ui/react/host';

import {UnsupportedComponentError} from './shared/UnsupportedComponentError';
import './ArgoStyleOverrides.css';

const createWorker = createWorkerFactory(() =>
  import(/* webpackChunkName: 'sandbox-worker' */ '@shopify/argo-admin-host/worker'),
);

type BaseProps<T extends ExtensionPoint> = Omit<
  ArgoExtensionsProps<T>,
  'api' | 'worker' | 'receiver'
>;

type Api<T extends ExtensionPoint> = Omit<
  ArgoExtensionsProps<T>['api'],
  'layout' | 'locale' | 'sessionToken'
>;

export interface App {
  title: string;
  developerName: string;
  icon?: {
    transformedSrc: string;
  };
  id: string;
  installation: {
    launchUrl: string;
  };
}

export interface StandardContainerProps<T extends ExtensionPoint> extends BaseProps<T> {
  app?: App;
  api?: Api<T>;
}

export function StandardContainer<T extends ExtensionPoint>(props: StandardContainerProps<T>) {
  const worker = useWorker(createWorker, {
    createMessenger: createIframeWorkerMessenger,
  });
  const [ref, layoutApi] = useLayoutApi();
  const sessionTokenApi = useSessionTokenApi(() => Promise.resolve(''), []);
  const localeApi = useLocaleApi('en');
  const api = useMemo(() => {
    if (!layoutApi) {
      return undefined;
    }
    return {
      ...layoutApi,
      ...sessionTokenApi,
      ...localeApi,
      ...props.api,
    };
  }, [layoutApi, sessionTokenApi, localeApi, props.api]);
  const [readyState, setReadyState] = useState(ReadyState.Loading);

  if (readyState === ReadyState.UnsupportedComponent) {
    return <UnsupportedComponentError />;
  }

  return (
    <div ref={ref} className="ArgoExtension">
      {api && (
        <ArgoExtension
          {...props}
          api={api as any}
          worker={worker}
          onReadyStateChange={setReadyState}
        />
      )}
    </div>
  );
}
