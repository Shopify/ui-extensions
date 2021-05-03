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
   * @defaultValue 'block'
   */
  border?: Border;
  /**
   * Sets the background color of the callout banner
   * @defaultValue 'secondary'
   */
  background?: Background;
  /**
   * Sets the alignment of the title and children
   * @defaultValue 'center'
   */
  alignment?: Alignment;
  /**
   * Sets the spacing between the title and children
   * @defaultValue 'tight'
   */
  spacing?: Spacing;
}

/**
 * CalloutBanner is used to inform buyers about the details of a limited
 * time offer. They differ from Banner which is used to report status.
 */
export const CalloutBanner = createRemoteComponent<
  'CalloutBanner',
  CalloutBannerProps
>('CalloutBanner');
