import {createRemoteComponent} from '@remote-ui/core';

type Spacing = 'none' | 'tight' | 'base' | 'loose';
type Alignment = 'leading' | 'trailing' | 'center';

export interface TextContainerProps {
  /** Align children’s on the horizontal axis  */
  alignment?: Alignment;
  /**
   * Adjust spacing between children
   * @default `base`
   */
  spacing?: Spacing;
}

/**
 * TextContainer is used to wrap text elements such as TextBlock and Heading, and provide
 * consistent vertical spacing.
 */
export const TextContainer = createRemoteComponent<
  'TextContainer',
  TextContainerProps
>('TextContainer');
