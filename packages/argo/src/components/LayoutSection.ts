import {createRemoteComponent} from '../utilities';

export interface LayoutSectionProps {
  oneHalf?: boolean;
}

export const LayoutSection = createRemoteComponent<'LayoutSection', LayoutSectionProps>(
  'LayoutSection',
);
