import {createRemoteComponent} from '@remote-ui/core';

import type {
  Appearance,
  ButtonAccessibilityRole,
  InlineAlignment,
  IdProps,
  OverlayActivatorProps,
  DisclosureActivatorProps,
  InteractionProps,
} from '../shared';

/** @publicDocs */
export interface ButtonProps
  extends OverlayActivatorProps,
    DisclosureActivatorProps,
    InteractionProps,
    IdProps {
  /**
   * The visual style variant of the button, which controls its prominence and emphasis. The visual presentation is controlled through the Branding API.
   *
   * - `'primary'`: High-emphasis style for main actions, such as "Continue to next step."
   * - `'secondary'`: Medium-emphasis style for secondary actions that don't block user progress, such as "Download Shop app."
   * - `'plain'`: Renders the button with a link-like appearance.
   *
   * @defaultValue 'primary'
   */
  kind?: 'primary' | 'secondary' | 'plain';
  /**
   * The semantic meaning and color treatment of the button, such as `'critical'` for destructive actions or `'monochrome'` for a neutral appearance.
   */
  appearance?: Extract<Appearance, 'monochrome' | 'critical'>;
  /**
   * Whether the button submits the nearest containing form when activated.
   * @deprecated Use `accessibilityRole="submit"` instead.
   */
  submit?: boolean;
  /**
   * The URL to navigate to when the button is activated. The `onPress` callback fires first, then navigation occurs.
   */
  to?: string;
  /**
   * Specifies the inline alignment of the content.
   *
   * @defaultValue 'center'
   */
  inlineAlignment?: InlineAlignment;
  /**
   * Whether the button is in a loading state, which replaces the button content with a loading indicator while a background action is being performed. This also disables the button.
   *
   * @defaultValue false
   */
  loading?: boolean;
  /**
   * Accessible label for the loading indicator when user prefers reduced motion. This value is
   * only used if `loading` is true.
   */
  loadingLabel?: string;
  /**
   * A label that describes the purpose or content of the button for users of assistive technologies such as screen readers. When set, any `children` supplied to this component won't be announced to screen reader users.
   */
  accessibilityLabel?: string;
  /**
   * The role of the button that will be rendered.
   *
   * - `'button'`: Renders a regular button.
   * - `'submit'`: Renders a button that submits a form.
   *
   * @defaultValue 'button'
   */
  accessibilityRole?: ButtonAccessibilityRole;
  /**
   * Whether the button is disabled, preventing it from being activated or receiving focus.
   *
   * @defaultValue false
   */
  disabled?: boolean;
  /**
   * A callback fired when the button is activated by the user.
   */
  onPress?(): void;
}

/**
 * Buttons are used for actions, such as “Add”, “Continue”, “Pay now”, or “Save”.
 */
export const Button = createRemoteComponent<'Button', ButtonProps>('Button');
