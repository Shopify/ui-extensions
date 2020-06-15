import {createRemoteComponent} from '../../utilities';

type Spacing = 'none' | 'tight' | 'loose';
type Alignment = 'trailing' | 'center';

export interface TextContainerProps {
  /** Align children’s on the horizontal axis  */
  alignment?: Alignment;
  /** Adjust spacing between children */
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
