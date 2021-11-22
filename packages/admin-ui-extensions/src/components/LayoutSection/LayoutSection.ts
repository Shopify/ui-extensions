import {createRemoteComponent} from '@remote-ui/core';

export interface LayoutSectionProps {
  secondary?: boolean;
}

export const LayoutSection = createRemoteComponent<
  'LayoutSection',
  LayoutSectionProps
>('LayoutSection');
