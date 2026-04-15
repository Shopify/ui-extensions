/** VERSION: 1.64.0 **/
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

/**
 * Properties for rendering a button group that arranges multiple buttons together with consistent spacing and semantic grouping.
 * @publicDocs
 */
export interface ButtonGroupProps
  extends Required<Pick<ButtonGroupProps$1, 'gap' | 'accessibilityLabel'>> {}

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
}

declare abstract class ButtonGroupBase
  extends PolarisCustomElement
  implements Pick<ButtonGroupProps, 'gap' | 'accessibilityLabel'>
{
  /**
   * The amount of spacing between buttons in the group, affecting the visual separation of actions.
   */
  accessor gap: ButtonGroupProps['gap'];
  /**
   * A label that's only visible to screen readers, describing the purpose of this group of buttons.
   */
  accessor accessibilityLabel: ButtonGroupProps['accessibilityLabel'];
  constructor(renderImpl: RenderImpl);
  disconnectedCallback(): void;
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

/**
 * A button group that arranges multiple buttons together with consistent spacing and semantic grouping for related actions.
 */
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
/**
 * Properties for using the button group component in JSX with React-style props.
 * @publicDocs
 */
export interface ButtonGroupJSXProps
  extends Partial<ButtonGroupProps>,
    Pick<ButtonGroupProps$1, 'id' | 'children'> {
  /**
   * The buttons that should be grouped together, provided as Button components.
   */
  children?: ComponentChildren;
  /**
   * A single primary action button that's visually emphasized as the most important action in the group.
   *
   * Accepts a single Button element with a `variant` of `primary`. Can't be used when `gap` is set to `none`.
   */
  primaryAction?: ComponentChildren;
  /**
   * One or more secondary action buttons that provide alternative or less prominent actions.
   *
   * Accepts Button elements with a `variant` of `secondary` or `auto`.
   */
  secondaryActions?: ComponentChildren;
}

export {ButtonGroup};
export type {ButtonGroupJSXProps};
