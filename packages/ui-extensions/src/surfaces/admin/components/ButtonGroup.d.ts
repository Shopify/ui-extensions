/** VERSION: 1.38.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  ComponentChildren,
  ButtonGroupProps$1,
  PreactCustomElement,
  RenderImpl,
} from './shared.d.ts';

export interface ButtonGroupProps
  extends Required<Pick<ButtonGroupProps$1, 'gap' | 'accessibilityLabel'>> {}

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
}

declare abstract class ButtonGroupBase
  extends PolarisCustomElement
  implements Pick<ButtonGroupProps, 'gap' | 'accessibilityLabel'>
{
  accessor gap: ButtonGroupProps['gap'];
  accessor accessibilityLabel: ButtonGroupProps['accessibilityLabel'];
  constructor(renderImpl: RenderImpl);
}

/** Used when an element does not have children. */
export interface PreactBaseElementProps<TClass extends HTMLElement> {
  /** Assigns a unique key to this element. */
  key?: preact.Key;
  /** Assigns a ref (generally from `useRef()`) to this element. */
  ref?: preact.Ref<TClass>;
  /** Assigns this element to a parent's slot. */
  slot?: Lowercase<string>;
}
/** Used when an element has children. */
export interface PreactBaseElementPropsWithChildren<TClass extends HTMLElement>
  extends PreactBaseElementProps<TClass> {
  children?: preact.ComponentChildren;
}

declare class ButtonGroup extends ButtonGroupBase implements ButtonGroupProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: ButtonGroup;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: Omit<
        ButtonGroupJSXProps,
        'primaryAction' | 'secondaryActions'
      > &
        PreactBaseElementPropsWithChildren<ButtonGroup>;
    }
  }
}

declare const tagName = 's-button-group';
export interface ButtonGroupJSXProps
  extends Partial<ButtonGroupProps>,
    Pick<ButtonGroupProps$1, 'id' | 'children'> {
  /**
   * The content of the ButtonGroup.
   */
  children?: ComponentChildren;
  /**
   * The primary action button for the group.
   * Accepts a single Button element with a `variant` of `primary`.
   * Cannot be used when gap="none".
   */
  primaryAction?: ComponentChildren;
  /**
   * Secondary action buttons for the group.
   * Accepts Button or PressButton elements with a `variant` of `secondary` or `auto`.
   */
  secondaryActions?: ComponentChildren;
}

export {ButtonGroup};
export type {ButtonGroupJSXProps};
