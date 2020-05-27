import React from 'react';
import {createPlainWorkerFactory} from '@shopify/react-web-worker';
import {usePerformanceMark} from '@shopify/react-performance';
import {ExtensionPoint} from '@shopify/argo';
import {useToastApi} from '@shopify/argo-host';

import {StandardContainer} from '../../components/containers';

const reactThirdPartyWorker = createPlainWorkerFactory(() =>
  import(/* webpackChunkName: 'components-list' */ '../../third-party/components-list'),
);

export function ComponentsList() {
  usePerformanceMark('complete', 'ComponentsList');
  const [Toast, toastApi] = useToastApi();

  return (
    <>
      <StandardContainer
        script={reactThirdPartyWorker.url}
        extensionPoint={ExtensionPoint.Playground}
        api={toastApi as any}
      />
      <Toast />
    </>
  );
}
