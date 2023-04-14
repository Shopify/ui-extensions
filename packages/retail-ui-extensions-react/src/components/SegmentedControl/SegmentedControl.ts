import {SegmentedControl as BaseSegmentedControl} from '@shopify/retail-ui-extensions';
import {createRemoteReactComponent} from '@remote-ui/react';

export type {SegmentedControlProps} from '@shopify/retail-ui-extensions';

export const SegmentedControl =
  createRemoteReactComponent(BaseSegmentedControl);
