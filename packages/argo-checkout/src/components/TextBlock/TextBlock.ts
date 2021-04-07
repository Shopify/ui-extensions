import {createRemoteComponent} from '@remote-ui/core';

type Size = 'extraSmall' | 'small' | 'base' | 'medium' | 'large' | 'extraLarge';

export interface TextBlockProps {
  /** Size of the text */
  size?: Size;
  /* Use to emphasize text that is more important than other nearby text */
  emphasized?: boolean;
  /* Use to de-emphasize text that is less important than other nearby text */
  subdued?: boolean;
  /** Unique identifier */
  id?: string;
  /** Changes the visual appearance */
  appearance?: 'critical' | 'warning' | 'success' | 'accent';
}

/**
 * TextBlock is used to render a block of text that occupies the full width available.
 * Usually used to render paragraphs or text.
 */
export const TextBlock = createRemoteComponent<'TextBlock', TextBlockProps>(
  'TextBlock',
);
