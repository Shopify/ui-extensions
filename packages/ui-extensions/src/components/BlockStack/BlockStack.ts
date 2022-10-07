import {createRemoteComponent} from '@remote-ui/core';

export interface BlockStackProps {}

export const BlockStack = createRemoteComponent<'BlockStack', BlockStackProps>(
  'BlockStack',
);
