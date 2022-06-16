import {createRemoteComponent} from '@remote-ui/core';

type Background = 'transparent' | 'color1' | 'color2' | 'color3';

export interface SectionProps {
  /**
   * Adjust the background.
   */
  background?: Background;
  /**
   * A label to use for the section title that will be used for buyers using
   * assistive technologies.
   */
  accessibilityLabel?: string;
}

export const Section = createRemoteComponent<'Section', SectionProps>(
  'Section',
);
