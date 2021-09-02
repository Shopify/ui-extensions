import {createRemoteComponent} from '@remote-ui/core';

export interface TextProps {
  /* Changes the visual appearance */
  appearance?: 'critical' | 'code' | 'subdued' | 'success';

  /* Use to emphasize text that is more important than other nearby text */
  emphasized?: boolean;

  /**
   * Unique identifier. Typically used as a target for another component’s controls
   * to associate an accessible label with an action.
   */
  id?: string;

  /* Size of the text */
  size?: 'extraSmall' | 'small' | 'base' | 'medium' | 'large' | 'extraLarge';

  /* Use for bold text that is more important than other nearby text */
  strong?: boolean;
}

/**
 * The Text component is used to render text in different sizes, colors, and alignments.
 */
export const Text = createRemoteComponent<'Text', TextProps>('Text');
