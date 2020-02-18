import React from 'react';
import {createPlainWorkerFactory, createWorkerFactory} from '@shopify/web-worker';
import {Page} from '@shopify/polaris';
import {usePerformanceMark} from '@shopify/react-performance';
import {AppExtension, RenderRoot} from '@shopify/app-extensions-renderer';

const reactThirdPartyWorker = createPlainWorkerFactory(() =>
  import(/* webpackChunkName: '3p-playground' */ '../../third-party/playground'),
);

const createWorker = createWorkerFactory(() =>
  import(/* webpackChunkName: 'sandbox' */ './sandbox'),
);

function Text({children}: {children: React.ReactNode}) {
  return <span>{children}</span>;
}

export function Home() {
  usePerformanceMark('complete', 'Home');

  return (
    <Page title="Home">
      <AppExtension
        createWorker={createWorker}
        extension={reactThirdPartyWorker.url}
        root={RenderRoot.Default}
        components={{Text}}
      />
    </Page>
  );
}
