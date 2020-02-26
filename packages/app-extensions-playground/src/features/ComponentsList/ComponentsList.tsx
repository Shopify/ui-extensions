import React from 'react';
import {createPlainWorkerFactory, createWorkerFactory} from '@shopify/web-worker';
import {Page} from '@shopify/polaris';
import {usePerformanceMark} from '@shopify/react-performance';
import {AppExtension, RenderRoot} from '@shopify/app-extensions-renderer';
import {host} from '@shopify/app-extensions-polaris-components';

const reactThirdPartyWorker = createPlainWorkerFactory(() =>
  import(/* webpackChunkName: 'components-list' */ '../../third-party/components-list'),
);

const createWorker = createWorkerFactory(() =>
  import(/* webpackChunkName: 'components-list-sandbox' */ './sandbox'),
);

export function ComponentsList() {
  usePerformanceMark('complete', 'ComponentsList');

  return (
    <Page title="Components List">
      <AppExtension
        createWorker={createWorker}
        extension={reactThirdPartyWorker.url}
        root={RenderRoot.Default}
        components={{
          ...host,
        }}
      />
    </Page>
  );
}
