import React from 'react';
import {createPlainWorkerFactory} from '@remote-ui/web-workers';
import {Page} from '@shopify/polaris';
import {usePerformanceMark} from '@shopify/react-performance';
import {ExtensionPoint} from '@shopify/argo';

import {StandardContainer} from '../../components/containers';

const reactThirdPartyWorker = createPlainWorkerFactory(() =>
  import(/* webpackChunkName: '3p-playground' */ '../../third-party/playground'),
);

export function Home() {
  usePerformanceMark('complete', 'Home');

  return (
    <Page title="Home">
      <StandardContainer
        script={reactThirdPartyWorker.url}
        extensionPoint={ExtensionPoint.Playground}
      />
    </Page>
  );
}
