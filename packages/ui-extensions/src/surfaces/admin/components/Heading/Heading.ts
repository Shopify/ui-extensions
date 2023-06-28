import {createRemoteComponent} from '@remote-ui/core';

type Level = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingProps {
  /** A unique identifier for the field. */
  id?: string;

  /** The visual level of the heading. */
  level?: Level;
}

export const Heading = createRemoteComponent<'Heading', HeadingProps>(
  'Heading',
);
