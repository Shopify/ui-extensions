import React from 'react';
import {createPlainWorkerFactory} from '@shopify/web-worker';
import {Page} from '@shopify/polaris';
import {usePerformanceMark} from '@shopify/react-performance';
import {ExtensionPoint} from '@shopify/app-extensions-renderer';
import {host} from '@shopify/app-extensions-polaris-components';
import {AppExtension} from '../../components';

const reactThirdPartyWorker = createPlainWorkerFactory(() =>
  import(/* webpackChunkName: '3p-playground' */ '../../third-party/playground'),
);

export function Home() {
  usePerformanceMark('complete', 'Home');

  return (
    <Page title="Home">
      <AppExtension
        script={reactThirdPartyWorker.url}
        extensionPoint={ExtensionPoint.Playground}
        components={host}
      />
    </Page>
  );
}
