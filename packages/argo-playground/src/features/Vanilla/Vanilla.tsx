import React from 'react';
import {createPlainWorkerFactory} from '@remote-ui/web-workers';
import {Page} from '@shopify/polaris';
import {usePerformanceMark} from '@shopify/react-performance';

import {StandardContainer} from '../../components/containers';

const reactThirdPartyWorker = createPlainWorkerFactory(() =>
  import(/* webpackChunkName: '3p-vanilla' */ '../../third-party/vanilla'),
);

export function Vanilla() {
  usePerformanceMark('complete', 'Vanilla');

  return (
    <Page title="Vanilla">
      <StandardContainer script={reactThirdPartyWorker.url} extensionPoint="Playground" />
    </Page>
  );
}
