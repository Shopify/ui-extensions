import React, {useMemo} from 'react';
import {ExtensionPoint} from '@shopify/argo-admin';
import {useLocaleApi, useToastApi} from '@shopify/argo-admin-host';
import {usePerformanceMark} from '@shopify/react-performance';
import {createPlainWorkerFactory} from '@shopify/react-web-worker';

import {StandardContainer} from '../../components/containers';
import {useGlobalLocale} from '../../foundation/App/ultilities/useGlobalLocale';

const reactThirdPartyWorker = createPlainWorkerFactory(() =>
  import(/* webpackChunkName: '3p-components-list' */ '../../third-party/components-list'),
);

export function ComponentsList() {
  usePerformanceMark('complete', 'ComponentsList');

  const locale = useGlobalLocale();
  const localeApi = useLocaleApi(locale);

  const [Toast, toastApi] = useToastApi();

  const api = useMemo(() => ({...toastApi, ...localeApi} as any), [toastApi, localeApi]);

  return (
    <>
      <StandardContainer
        script={reactThirdPartyWorker.url}
        extensionPoint={ExtensionPoint.Playground}
        api={api}
      />
      <Toast />
    </>
  );
}
