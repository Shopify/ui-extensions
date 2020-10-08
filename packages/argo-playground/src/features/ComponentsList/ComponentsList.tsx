import React, {useMemo} from 'react';
import {useLocaleApi, useToastApi} from '@shopify/argo-admin-host';
import {usePerformanceMark} from '@shopify/react-performance';
import {createPlainWorkerFactory} from '@remote-ui/web-workers';

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
      <StandardContainer script={reactThirdPartyWorker.url} extensionPoint="Playground" api={api} />
      <Toast />
    </>
  );
}
