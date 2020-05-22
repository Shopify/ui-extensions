import {createRemoteComponent} from '@remote-ui/core';

export interface LayoutSectionProps {
  oneHalf?: boolean;
}

export const LayoutSection = createRemoteComponent<'LayoutSection', LayoutSectionProps>(
  'LayoutSection',
);
