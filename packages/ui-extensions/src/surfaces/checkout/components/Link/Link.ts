import {createRemoteComponent} from '@remote-ui/core';

import type {
  Appearance,
  OverlayActivatorProps,
  DisclosureActivatorProps,
  InteractionProps,
} from '../shared';

/** @publicDocs */
export interface LinkProps
  extends OverlayActivatorProps,
    DisclosureActivatorProps,
    InteractionProps {
  /**
   * The URL to navigate to when the link is activated. You must provide either this property, `onPress`, or both.
   */
  to?: string;
  /**
   * Whether to open the link in a new window or tab. Links to domains other than your storefront always open in a new tab regardless of this setting.
   */
  external?: boolean;
  /**
   * A unique identifier for the element. Typically used as a target for another component's controls to associate an accessible label with an action.
   */
  id?: string;
  /**
   * The language of the link's text content. Use this when the link text is in a different language than the rest of the page, so assistive technologies can invoke the correct pronunciation. See the [reference of values](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) (`Subtag` label).
   */
  language?: string;
  /**
   * A label that describes the purpose or content of the link for users of assistive technologies such as screen readers. When set, any `children` supplied to this component won't be announced to screen reader users.
   */
  accessibilityLabel?: string;
  /**
   * The color treatment of the link. `'monochrome'` inherits the color of its parent element.
   */
  appearance?: Extract<Appearance, 'monochrome'>;
  /**
   * A callback fired when the link is activated. If `to` is set, the callback fires first, then navigation occurs.
   */
  onPress?(): void;
}

/**
 * Link makes text interactive so customers can perform an action, such as navigating to another location.
 */
export const Link = createRemoteComponent<'Link', LinkProps>('Link');
