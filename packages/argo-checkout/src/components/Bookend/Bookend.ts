import {createRemoteComponent} from '@remote-ui/core';

type Spacing = 'xtight' | 'tight' | 'loose' | 'xloose';
type Alignment = 'leading' | 'center' | 'trailing' | 'baseline';

export interface BookendProps {
  /** Sets the leading child to its inherent size */
  leading?: boolean;
  /** Sets the trailing child to its inherent size */
  trailing?: boolean;
  /** Position children along the cross axis */
  alignment?: Alignment;
  /** Adjust spacing between children */
  spacing?: Spacing;
}

/**
 * Bookend sets the leading and/or trailing child to its inherent size while the remaining
 * children fill the available space
 */
export const Bookend = createRemoteComponent<'Bookend', BookendProps>(
  'Bookend',
);
