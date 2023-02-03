import {createRemoteComponent} from '@remote-ui/core';

type Level = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingProps {
  /**
   * Unique identifier. Typically used to make the heading a target
   * that another component can refer to in order to provide an alternative
   * accessibility label.
   */
  id?: string;

  /**
   * The visual level of the heading.
   * @default 2
   */
  level?: Level;
}

/**
 * Headings are used as the titles of each major section of an extension.
 */
export const Heading = createRemoteComponent<'Heading', HeadingProps>(
  'Heading',
);
