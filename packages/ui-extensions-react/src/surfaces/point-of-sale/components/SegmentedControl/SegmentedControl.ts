import {SegmentedControl as BaseSegmentedControl} from '@shopify/ui-extensions/point-of-sale';
import {createRemoteReactComponent} from '@remote-ui/react';

export type {SegmentedControlProps} from '@shopify/ui-extensions/point-of-sale';

export const SegmentedControl =
  createRemoteReactComponent(BaseSegmentedControl);
