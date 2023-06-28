import {createRemoteComponent} from '@remote-ui/core';
import type {AccessibilityRole} from '../shared';

type Level = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingProps {
  /** A unique identifier for the field. */
  id?: string;

  /** The visual level of the heading. */
  level?: Level;

  /**
   * Sets the semantic meaning of the component’s content. When set,
   * the role will be used by assistive technologies to help buyers
   * navigate the page.
   */
  accessibilityRole?: Extract<AccessibilityRole, 'presentation'>;
}

export const Heading = createRemoteComponent<'Heading', HeadingProps>(
  'Heading',
);
