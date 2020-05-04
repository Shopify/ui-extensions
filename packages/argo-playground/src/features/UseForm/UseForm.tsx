import React from 'react';
import {createPlainWorkerFactory} from '@shopify/web-worker';
import {usePerformanceMark} from '@shopify/react-performance';
import {ExtensionPoint} from '@shopify/argo';
import {components} from '@shopify/argo-host';

import {StandardContainer} from '../../components/containers';

const reactThirdPartyWorker = createPlainWorkerFactory(() =>
  import(/* webpackChunkName: 'use-form' */ '../../third-party/use-form'),
);

export function UseForm() {
  usePerformanceMark('complete', 'UseForm');

  return (
    <StandardContainer
      script={reactThirdPartyWorker.url}
      extensionPoint={ExtensionPoint.Playground}
      components={components}
    />
  );
}
