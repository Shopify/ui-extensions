import {createRemoteComponent} from '@remote-ui/core';

import {MaybeResponsiveConditionalStyle} from '../../style';
import type {
  BlockAlignment,
  BorderProps,
  InlineAlignment,
  SizingProps,
  SpacingProps,
  Display,
  ButtonAccessibilityRole,
  OverlayActivatorProps,
} from '../shared';
import type {ViewProps} from '../View/View';

export interface PressableProps
  extends BorderProps,
    SizingProps,
    SpacingProps,
    OverlayActivatorProps,
    Pick<ViewProps, 'opacity'> {
  /**
   * Changes the display of the Pressable.
   *
   *
   * `inline` follows the direction of words in a sentence based on the document’s writing mode.
   *
   * `block` follows the direction of paragraphs based on the document’s writing mode.
   *
   *
   * @defaultValue 'block'
   */
  display?: Display;

  /**
   * A label that describes the purpose or contents of the element. When set,
   * it will be announced to buyers using assistive technologies and will
   * provide them with more context.
   */
  accessibilityLabel?: string;

  /**
   * The role of the button that will be rendered.
   *
   * `button`: renders a regular button.
   *
   * `submit`: renders a button that submits a form.
   *
   * @defaultValue 'button'
   */
  accessibilityRole?: ButtonAccessibilityRole;

  /**
   * Disables the button, disallowing any interaction
   */
  disabled?: boolean;

  /**
   * A unique identifier for the Pressable.
   */
  id?: string;

  /**
   * Disables the button while loading. Unlike `Button`, no indicator is rendered while loading.
   */
  loading?: boolean;

  /**
   * Callback that is run when the button or link is pressed.
   */
  onPress?: () => void;

  /**
   * Callback that is run when the button or link focus is removed.
   */
  onBlur?: () => void;

  /**
   * Callback that is run when the button or link is focused.
   */
  onFocus?: () => void;

  /**
   * Callback that is run when a pointing device button is pressed while the pointer is inside the button or link.
   */
  onPointerDown?: () => void;

  /**
   * Callback that is run when the pointing device is over (enters) the button or link.
   */
  onPointerEnter?: () => void;

  /**
   *  Callback that is run when the pointing device has left the button or link.
   */
  onPointerLeave?: () => void;

  /**
   * Callback that is run when a pointing device button is released while the pointer is inside the element button or link.
   */
  onPointerUp?: () => void;

  /**
   * Destination URL to link to. If this value is set, If this value is set, the component will render an `<a>` tag.
   */
  to?: string;

  /**
   * Position children along the cross axis
   */
  blockAlignment?: MaybeResponsiveConditionalStyle<
    Extract<BlockAlignment, 'start' | 'center' | 'end'>
  >;

  /**
   * Position children along the main axis
   */
  inlineAlignment?: MaybeResponsiveConditionalStyle<InlineAlignment>;
}

/**
 * Pressable is a generic interactive component. It shares the same styling properties as View but also adds
 * pressable behavior, meaning that you can execute some logic in response to user interaction.
 * Use this component for creating interactive elements without the default styling that comes with `Button` and `Link`.
 */
export const Pressable = createRemoteComponent<'Pressable', PressableProps>(
  'Pressable',
);
