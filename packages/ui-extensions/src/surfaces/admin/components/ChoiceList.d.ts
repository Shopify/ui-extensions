/** VERSION: 1.38.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  ComponentChildren,
  ChoiceListProps$1,
  PreactCustomElement,
  RenderImpl,
} from './shared.d.ts';

export type CallbackEvent<T extends keyof HTMLElementTagNameMap> = Event & {
  currentTarget: HTMLElementTagNameMap[T];
};
export type CallbackEventListener<T extends keyof HTMLElementTagNameMap> =
  | (EventListener & {
      (event: CallbackEvent<T>): void;
    })
  | null;
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

export interface ChoiceListProps
  extends Required<
    Pick<
      ChoiceListProps$1,
      | 'details'
      | 'disabled'
      | 'error'
      | 'label'
      | 'labelAccessibilityVisibility'
      | 'multiple'
      | 'name'
      | 'values'
    >
  > {}

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
}

declare const internals: unique symbol;
declare class BaseClass extends PolarisCustomElement {
  static formAssociated: boolean;
  constructor(renderImpl: RenderImpl);
  /** @private */
  [internals]: ElementInternals;
}
declare class ChoiceList extends BaseClass implements ChoiceListProps {
  accessor disabled: ChoiceListProps['disabled'];
  accessor name: ChoiceListProps['name'];
  accessor error: ChoiceListProps['error'];
  accessor details: ChoiceListProps['details'];
  accessor multiple: ChoiceListProps['multiple'];
  accessor label: ChoiceListProps['label'];
  accessor onchange: CallbackEventListener<typeof tagName> | null;
  accessor oninput: CallbackEventListener<typeof tagName> | null;
  accessor labelAccessibilityVisibility: ChoiceListProps['labelAccessibilityVisibility'];
  get values(): ChoiceListProps['values'];
  set values(values: ChoiceListProps['values']);
  /** @private */
  formResetCallback(): void;
  constructor();
  /** @private */
  connectedCallback(): void;
  /** @private */
  disconnectedCallback(): void;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: ChoiceList;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: ChoiceListJSXProps &
        PreactBaseElementPropsWithChildren<ChoiceList>;
    }
  }
}

declare const tagName = 's-choice-list';
export interface ChoiceListJSXProps
  extends Partial<ChoiceListProps>,
    Pick<ChoiceListProps$1, 'id' | 'children'> {
  /**
   * The choices a user can select from.
   *
   * Accepts `Choice` components.
   */
  children?: ComponentChildren;
  onChange?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  onInput?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}

export {ChoiceList};
export type {ChoiceListJSXProps};
