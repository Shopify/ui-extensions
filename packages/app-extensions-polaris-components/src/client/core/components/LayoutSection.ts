import {createRemoteComponent} from '@shopify/remote-ui-core';

export interface LayoutSectionProps {
  oneHalf?: boolean;
}

export const LayoutSection = createRemoteComponent<'LayoutSection', LayoutSectionProps>(
  'LayoutSection',
);
