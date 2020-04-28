import React from 'react';
import {createPlainWorkerFactory} from '@shopify/web-worker';
import {usePerformanceMark} from '@shopify/react-performance';
import {ExtensionPoint} from '@shopify/app-extensions-renderer';
import {host} from '@shopify/app-extensions-polaris-components';
import {AppExtension} from '../../components';

const reactThirdPartyWorker = createPlainWorkerFactory(() =>
  import(/* webpackChunkName: 'use-form' */ '../../third-party/use-form'),
);

export function UseForm() {
  usePerformanceMark('complete', 'UseForm');

  return (
    <AppExtension
      script={reactThirdPartyWorker.url}
      extensionPoint={ExtensionPoint.Playground}
      components={host}
    />
  );
}
