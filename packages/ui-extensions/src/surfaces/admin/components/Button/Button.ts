import {createRemoteComponent} from '@remote-ui/core';
import type {AccessibilityRole, AnchorProps} from '../shared';

/**
 * Props for the Button component. A button can either be a standard action
 * button (`ButtonBaseProps`) or an anchor-style button that navigates to a
 * URL (`ButtonAnchorProps`).
 *
 * @publicDocs
 */
export type ButtonProps = ButtonBaseProps | ButtonAnchorProps;

/**
 * Props shared between all button variants, including accessibility,
 * visual style, tone, and event callbacks.
 */
interface CommonProps {
  /**
   * A label read by assistive technologies like screen readers to describe
   * the button's purpose. Use this when the button contains only an icon
   * or when the visible text doesn't provide enough context on its own
   * for users who can't see the button.
   */
  accessibilityLabel?: string;

  /**
   * A unique identifier for the button. Use this when you need to
   * reference the button programmatically or distinguish it from other
   * buttons in the same view.
   */
  id?: string;

  /**
   * Whether the button is disabled. When `true`, the button can't be
   * interacted with and is rendered in a visually muted style to indicate
   * it isn't available.
   * @defaultValue false
   */
  disabled?: boolean;

  /**
   * The visual style of the button, used to convey its level of emphasis.
   *
   * - `primary`: A high-emphasis button for the main action in a section.
   * - `secondary`: A medium-emphasis button for supporting actions.
   * - `tertiary`: A low-emphasis button for less prominent actions, rendered
   *   as a plain text link-style button.
   *
   * @defaultValue 'secondary'
   */
  variant?: 'primary' | 'secondary' | 'tertiary';

  /**
   * The color treatment of the button, used to convey its intent.
   *
   * - `default`: Standard button color for general actions.
   * - `critical`: Red coloring to indicate a destructive or irreversible
   *   action, such as deleting a resource.
   *
   * @defaultValue 'default'
   */
  tone?: 'default' | 'critical';

  /**
   * The language of the button's text content. Use this when the
   * button text is in a different language than the rest of the page so
   * assistive technologies can invoke the correct pronunciation.
   * Must be a valid [IANA language subtag](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry).
   */
  language?: string;

  /**
   * An alias for `language`.
   * The language of the button's text content. Use this when the
   * button text is in a different language than the rest of the page so
   * assistive technologies can invoke the correct pronunciation.
   * Must be a valid [IANA language subtag](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry).
   */
  lang?: string;

  /**
   * A callback fired when the button is pressed. If `href` is set, the
   * callback runs first, then the navigation occurs.
   */
  onClick?(): void;

  /**
   * An alias for `onClick`.
   * A callback fired when the button is pressed. If `href` is set, the
   * callback runs first, then the navigation occurs.
   */
  onPress?(): void;

  /**
   * A callback fired when the button loses focus. Use this to trigger
   * validation or other logic when the merchant moves away from the button.
   */
  onBlur?(): void;

  /**
   * A callback fired when the button receives focus. Use this to trigger
   * logic when the merchant focuses the button through keyboard navigation or
   * other input methods.
   */
  onFocus?(): void;
}

/**
 * Props for a standard action button that triggers behavior when pressed.
 * Extends `CommonProps` and adds an `accessibilityRole` to control the
 * semantic role (button, submit, or reset).
 */
interface ButtonBaseProps extends CommonProps {
  /**
   * The semantic role of the button for assistive technologies.
   *
   * - `submit`: Submits the nearest containing form when pressed.
   * - `button`: A standard button that triggers an action (default).
   * - `reset`: Resets the nearest containing form to its default values.
   *
   * @defaultValue 'button'
   */
  accessibilityRole?: Extract<AccessibilityRole, 'submit' | 'button' | 'reset'>;
}

/**
 * Props for an anchor-style button that navigates to a URL when pressed.
 * Extends `CommonProps` and adds link-specific properties like `href`,
 * `target`, and `download`.
 */
interface ButtonAnchorProps extends CommonProps {
  /**
   * The URL to navigate to when the button is pressed. When set, the button
   * behaves as a link. If an `onClick` callback is also provided, it runs
   * first, then the navigation occurs.
   */
  href: AnchorProps['href'];

  /**
   * An alias for `href`.
   * The URL to navigate to when the button is pressed.
   */
  to?: AnchorProps['href'];

  /**
   * When set, the linked resource is downloaded instead of being navigated
   * to. Pass a string to specify a custom filename for the downloaded file,
   * or `true` to use the default filename.
   */
  download?: boolean | string;

  /**
   * The browsing context in which to open the linked URL.
   *
   * - `_blank`: Opens in a new tab or window.
   * - `_self`: Opens in the same context (default).
   *
   * @defaultValue '_self'
   */
  target?: '_blank' | '_self';

  /**
   * A callback fired when the link button is pressed. The callback runs
   * first, then the navigation to `href` occurs.
   */
  onClick?: AnchorProps['onClick'];

  /**
   * An alias for `onClick`.
   * A callback fired when the link button is pressed. The callback runs
   * first, then the navigation to `href` occurs.
   */
  onPress?: AnchorProps['onClick'];
}

/**
 * Button triggers an action or navigates to a URL when pressed. It supports
 * multiple visual variants, tones, and can behave as either a standard
 * button or an anchor link.
 */
export const Button = createRemoteComponent<'Button', ButtonProps>('Button');
