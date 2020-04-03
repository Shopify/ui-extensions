import React from 'react';
import {host} from '@shopify/app-extensions-polaris-components';
import {ExtensionPoint} from '@shopify/app-extensions-renderer';
import {usePerformanceMark} from '@shopify/react-performance';
import {createPlainWorkerFactory} from '@shopify/web-worker';

import {AppExtension} from '../../components';

const reactThirdPartyWorker = createPlainWorkerFactory(() =>
  import(/* webpackChunkName: 'product-reviews' */ '../../third-party/product-reviews'),
);

export function ProductReviews() {
  usePerformanceMark('complete', 'Home');

  return (
    <AppExtension
      script={reactThirdPartyWorker.url}
      extensionPoint={ExtensionPoint.AppLink}
      components={host}
    />
  );
}
