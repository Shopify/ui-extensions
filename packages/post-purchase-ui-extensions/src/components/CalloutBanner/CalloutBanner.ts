import {createRemoteComponent} from '@remote-ui/core';

type Border = 'none' | 'block';
type Background = 'secondary' | 'transparent';
type Alignment = 'leading' | 'center' | 'trailing';
type Spacing = 'none' | 'tight' | 'loose';

export interface CalloutBannerProps {
  /**
   * Callout banners have an optional title. Use a title to grab the buyers
   * attention with a short, concise message.
   */
  title?: string;
  /**
   * Adds a top and bottom border to the callout banner
   * @default 'block'
   */
  border?: Border;
  /**
   * Sets the background color of the callout banner
   * @default 'secondary'
   */
  background?: Background;
  /**
   * Sets the alignment of the title and children
   * @default 'center'
   */
  alignment?: Alignment;
  /**
   * Sets the spacing between the title and children
   * @default 'tight'
   */
  spacing?: Spacing;
}

/**
 * CalloutBanner is used to inform buyers about the details of a limited
 * time offer. They differ from Banner which is used to report status.
 *
 * Guidelines:
 *
 * - Never display more than one CalloutBanner
 * - Place callout banners near the top of the page to bring the buyer's attention
 * - The text should be written as concisely as possible
 * - Be considerate and avoid anxiety provoking language:
 *   - Avoid exclamation points  – “Wait! Before time runs out!”
 *   - Give it a feeling of personalization
 */
export const CalloutBanner = createRemoteComponent<
  'CalloutBanner',
  CalloutBannerProps
>('CalloutBanner');
