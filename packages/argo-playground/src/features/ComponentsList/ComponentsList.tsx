import React, {useState, useCallback, useMemo} from 'react';
import {createPlainWorkerFactory} from '@shopify/react-web-worker';
import {usePerformanceMark} from '@shopify/react-performance';
import {ExtensionPoint} from '@shopify/argo';
import {useToastApi, useLocaleApi} from '@shopify/argo-host';
import {Button} from '@shopify/polaris';

import {StandardContainer} from '../../components/containers';

const reactThirdPartyWorker = createPlainWorkerFactory(() =>
  import(/* webpackChunkName: '3p-components-list' */ '../../third-party/components-list'),
);

export function ComponentsList() {
  usePerformanceMark('complete', 'ComponentsList');

  const [locale, setLocale] = useState('en');
  const localeApi = useLocaleApi(locale);
  const onChangeLocaleClick = useCallback(() => {
    setLocale(locale => (locale === 'en' ? 'fr' : 'en'));
  }, []);

  const [Toast, toastApi] = useToastApi();

  const api = useMemo(() => ({...toastApi, ...localeApi} as any), [toastApi, localeApi]);

  return (
    <>
      <Button onClick={onChangeLocaleClick}>Toggle locale ({locale})</Button>
      <StandardContainer
        script={reactThirdPartyWorker.url}
        extensionPoint={ExtensionPoint.Playground}
        api={api}
      />
      <Toast />
    </>
  );
}
