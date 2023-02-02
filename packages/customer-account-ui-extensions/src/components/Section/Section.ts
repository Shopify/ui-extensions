import {createRemoteComponent} from '@remote-ui/core';
import type {BackgroundProps} from '../shared';

export interface SectionProps extends BackgroundProps {
  /**
   * A label to use for the section title that will be used for buyers using
   * assistive technologies.
   */
  accessibilityLabel?: string;
}

export const Section = createRemoteComponent<'Section', SectionProps>(
  'Section',
);
