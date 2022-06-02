import {createRemoteComponent} from '@remote-ui/core';

import {InlineAlignment, Spacing} from '../shared';

type Border = 'none' | 'block';
type Background = 'transparent' | 'color1' | 'color2' | 'color3';

export interface CalloutBannerProps {
  /**
   * Callout banners have an optional title. Use a title to grab the buyers
   * attention with a short, concise message.
   */
  title?: string;
  /**
   * Adds a top and bottom border to the callout banner
   *
   * @defaultValue 'block'
   */
  border?: Border;
  /**
   * Sets the background color of the callout banner
   *
   * @defaultValue 'color2'
   */
  background?: Background;
  /**
   * Sets the alignment of the title and children
   *
   * @defaultValue 'center'
   */
  inlineAlignment?: InlineAlignment;
  /**
   * Sets the spacing between the title and children
   *
   * @defaultValue 'tight'
   */
  spacing?: Extract<Spacing, 'none' | 'tight' | 'loose'>;
}

/**
 * Use callout banners to inform buyers about new features or opportunities.
 * They differ from the Banner component which is used to report status.
 */
export const CalloutBanner = createRemoteComponent<
  'CalloutBanner',
  CalloutBannerProps
>('CalloutBanner');
