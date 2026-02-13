import {createRemoteComponent} from '@remote-ui/core';

/**
 * Props for the Link component, an interactive text element that navigates
 * to a URL or triggers an action when pressed.
 */
export interface LinkProps {
  /**
   * A unique identifier for the link. When not set,
   * a globally unique value will be used instead.
   */
  id?: string;

  /**
   * The URL to link to. If set, the link will navigate to the specified
   * location after executing the `onClick` callback. Use this prop for
   * standard navigation links within or outside the Shopify admin.
   */
  href?: string;

  /**
   * An alias for `href`. If set, the link will navigate to the specified
   * location after executing the `onClick` callback.
   */
  to?: string;

  /**
   * The color of the link text.
   *
   * - `default`: Uses the standard link color to indicate an interactive element.
   * - `inherit`: Takes the color value from its parent, giving the link a
   *   monochrome appearance. Pair this with another stylistic
   *   treatment, like an underline, to differentiate the link from normal text.
   * - `critical`: Uses a critical (destructive) color to indicate a potentially
   *   dangerous action, such as deleting a resource.
   *
   * @defaultValue 'default'
   */
  tone?: 'default' | 'inherit' | 'critical';

  /**
   * A callback that fires when the link is pressed. If `href` is set,
   * the callback executes first and then the link navigates to the
   * specified location.
   */
  onClick?(): void;

  /**
   * An alias for `onClick`. A callback that fires when the link is pressed.
   * If `href` is set, the callback executes first and then the link
   * navigates to the specified location.
   */
  onPress?(): void;

  /**
   * A label that describes the purpose or contents of the link for
   * assistive technologies. When set, any `children` supplied to this
   * component will not be announced to screen reader users.
   */
  accessibilityLabel?: string;

  /**
   * The language of the link's text content. Use this when the
   * link text is in a different language than the rest of the page so
   * assistive technologies can invoke the correct pronunciation.
   * Must be a valid [IANA language subtag](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry).
   */
  language?: string;

  /**
   * An alias for `language`.
   * The language of the link's text content. Use this when the
   * link text is in a different language than the rest of the page so
   * assistive technologies can invoke the correct pronunciation.
   * Must be a valid [IANA language subtag](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry).
   */
  lang?: string;

  /**
   * The browsing context for opening the linked URL.
   *
   * - `_blank`: Opens the link in a new tab or window.
   * - `_self`: Opens the link in the current page (default behavior).
   *
   * @defaultValue '_self'
   */
  target?: '_blank' | '_self';
}

/**
 * An interactive text element that navigates to a URL or triggers an
 * action when pressed.
 */
export const Link = createRemoteComponent<'Link', LinkProps>('Link');
