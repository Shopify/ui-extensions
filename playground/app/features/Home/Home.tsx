import React from 'react';
import {Page} from '@shopify/polaris';
import {usePerformanceMark} from '@shopify/react-performance';

export function Home() {
  usePerformanceMark('complete', 'Home');

  return (
    <Page title="Home">
      <p>Hello world</p>
    </Page>
  );
}
