import React from 'react';
import {createPlainWorkerFactory} from '@remote-ui/web-workers';
import {usePerformanceMark} from '@shopify/react-performance';
import {ExtensionPoint} from '@shopify/argo-admin';

import {StandardContainer} from '../../components/containers';

const reactThirdPartyWorker = createPlainWorkerFactory(() =>
  import(/* webpackChunkName: '3p-use-form' */ '../../third-party/use-form'),
);

export function UseForm() {
  usePerformanceMark('complete', 'UseForm');

  return <StandardContainer script={reactThirdPartyWorker.url} extensionPoint="Playground" />;
}
