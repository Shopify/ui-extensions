import {createRemoteComponent} from '@remote-ui/core';

import type {MaybeResponsiveConditionalStyle} from '../../style/types';
import type {
  BlockAlignment,
  BorderProps,
  InlineAlignment,
  SizingProps,
  SpacingProps,
  Display,
  ButtonAccessibilityRole,
  OverlayActivatorProps,
  DisclosureActivatorProps,
  InteractionProps,
  CornerProps,
  Opacity,
  BackgroundProps,
  IdProps,
} from '../shared';

/** @publicDocs */
export interface PressableProps
  extends Pick<BackgroundProps, 'background'>,
    BorderProps,
    CornerProps,
    IdProps,
    InteractionProps,
    SizingProps,
    SpacingProps,
    OverlayActivatorProps,
    DisclosureActivatorProps {
  /**
   * Changes the display of the component.
   *
   *
   * `inline` the component starts on the same line as preceding inline content and allows subsequent content to continue on the same line.
   *
   * `block` the component starts on its own new line and fills its parent.
   *
   * `auto` resets the component to its initial value. The actual value depends on the component and context.
   *
   * `none` hides the component and removes it from the accessibility tree, making it invisible to screen readers.
   *
   * Learn more about the [display property](https://developer.mozilla.org/en-US/docs/Web/CSS/display).
   *
   * @defaultValue 'auto'
   */
  display?: MaybeResponsiveConditionalStyle<Display>;
  /**
   * A label that describes the purpose or content of the element for users of assistive technologies such as screen readers. When set, it provides additional context beyond the visible content.
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
   * Whether the element is disabled, preventing it from being activated or receiving focus.
   */
  disabled?: boolean;

  /**
   * Whether the element is in a loading state. Unlike `Button`, no loading indicator is rendered.
   */
  loading?: boolean;

  /**
   * A callback fired when the element is activated by the user.
   */
  onPress?: () => void;

  /**
   * A callback fired when the element loses focus.
   */
  onBlur?: () => void;

  /**
   * A callback fired when the element receives focus.
   */
  onFocus?: () => void;

  /**
   * A callback fired when a pointing device button is pressed while the pointer is inside the element.
   */
  onPointerDown?: () => void;

  /**
   * A callback fired when the pointing device enters the element.
   */
  onPointerEnter?: () => void;

  /**
   * A callback fired when the pointing device leaves the element.
   */
  onPointerLeave?: () => void;

  /**
   * A callback fired when a pointing device button is released while the pointer is inside the element.
   */
  onPointerUp?: () => void;

  /**
   * The URL to navigate to when the element is activated. When set, the component renders as an anchor element.
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

  /**
   * Sets the opacity of the View. The opacity will be applied to the background as well as all
   * the children of the View. Use carefully as this could decrease the contrast ratio between
   * the background and foreground elements, resulting in unreadable and inaccessible text.
   */
  opacity?: Opacity;

  /**
   * Sets the overflow behavior of the element.
   *
   * `hidden`: clips the content when it is larger than the element’s container.
   * The element will not be scrollable and the users will not be able
   * to access the clipped content by dragging or using a scroll wheel.
   *
   * `visible`: the content that extends beyond the element’s container is visible.
   *
   * @default 'visible'
   */
  overflow?: 'hidden' | 'visible';
}

/**
 * Pressable is a generic interactive component. It shares the same styling properties as View but also adds
 * pressable behavior, meaning that you can execute some logic in response to user interaction.
 * Use this component for creating interactive elements without the default styling that comes with `Button` and `Link`.
 */
export const Pressable = createRemoteComponent<'Pressable', PressableProps>(
  'Pressable',
);
