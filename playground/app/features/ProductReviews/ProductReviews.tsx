import React from 'react';
import {createPlainWorkerFactory, createWorkerFactory} from '@shopify/web-worker';
import {Page} from '@shopify/polaris';
import {usePerformanceMark} from '@shopify/react-performance';
import {AppExtension, RenderRoot} from '@shopify/app-extensions-renderer';
import {host} from '@shopify/app-extensions-polaris-components';

const reactThirdPartyWorker = createPlainWorkerFactory(() =>
  import(/* webpackChunkName: 'product-reviews' */ '../../third-party/product-reviews'),
);

const createWorker = createWorkerFactory(() =>
  import(/* webpackChunkName: 'sandbox' */ './sandbox'),
);

export function ProductReviews() {
  usePerformanceMark('complete', 'Home');

  return (
    <Page title="Product Reviews">
      <AppExtension
        createWorker={createWorker}
        extension={reactThirdPartyWorker.url}
        root={RenderRoot.Default}
        components={host}
      />
    </Page>
  );
}
