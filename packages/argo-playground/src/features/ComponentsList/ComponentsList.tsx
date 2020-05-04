import React, {useMemo} from 'react';
import {createPlainWorkerFactory} from '@shopify/web-worker';
import {usePerformanceMark} from '@shopify/react-performance';
import {ExtensionPoint} from '@shopify/argo';
import {components} from '@shopify/argo-host';

import {StandardContainer} from '../../components/containers';

const reactThirdPartyWorker = createPlainWorkerFactory(() =>
  import(/* webpackChunkName: 'components-list' */ '../../third-party/components-list'),
);

export function ComponentsList() {
  usePerformanceMark('complete', 'ComponentsList');

  return (
    <StandardContainer
      script={reactThirdPartyWorker.url}
      extensionPoint={ExtensionPoint.Playground}
      components={components}
    />
  );
}
