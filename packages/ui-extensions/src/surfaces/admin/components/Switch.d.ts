/** VERSION: 1.25.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  TextFieldProps,
  CheckboxProps,
  SwitchProps$1,
  ComponentChildren,
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

export type Styles = string;
export type RenderImpl = Omit<ShadowRootInit, 'mode'> & {
  ShadowRoot: (element: any) => ComponentChildren;
  styles?: Styles;
};
export interface ActivationEventEsque {
  shiftKey: boolean;
  metaKey: boolean;
  ctrlKey: boolean;
  button: number;
}
export interface ClickOptions {
  /**
   * The event you want to influence the synthetic click.
   */
  sourceEvent?: ActivationEventEsque;
}
/**
 * Base class for creating custom elements with Preact.
 * While this class could be used in both Node and the browser, the constructor will only be used in the browser.
 * So we give it a type of HTMLElement to avoid typing issues later where it's used, which will only happen in the browser.
 */
declare const BaseClass: typeof globalThis.HTMLElement;
declare abstract class PreactCustomElement extends BaseClass {
  /** @private */
  static get observedAttributes(): string[];
  constructor({
    styles,
    ShadowRoot: renderFunction,
    delegatesFocus,
    ...options
  }: RenderImpl);

  /** @private */
  setAttribute(name: string, value: string): void;
  /** @private */
  attributeChangedCallback(name: string): void;
  /** @private */
  connectedCallback(): void;
  /** @private */
  disconnectedCallback(): void;
  /** @private */
  adoptedCallback(): void;
  /**
   * Queue a run of the render function.
   * You shouldn't need to call this manually - it should be handled by changes to @property values.
   * @private
   */
  queueRender(): void;
  /**
   * Like the standard `element.click()`, but you can influence the behavior with a `sourceEvent`.
   *
   * For example, if the `sourceEvent` was a middle click, or has particular keys held down,
   * components will attempt to produce the desired behavior on links, such as opening the page in the background tab.
   * @private
   * @param options
   */
  click({sourceEvent}?: ClickOptions): void;
}

declare const internals: unique symbol;
export type PreactInputProps = Required<
  Pick<TextFieldProps, 'disabled' | 'id' | 'name' | 'value'>
>;
declare class PreactInputElement
  extends PreactCustomElement
  implements PreactInputProps
{
  static formAssociated: boolean;
  /** @private */
  [internals]: ElementInternals;
  accessor onchange: CallbackEventListener<'input'>;
  accessor oninput: CallbackEventListener<'input'>;
  accessor disabled: PreactInputProps['disabled'];
  accessor id: PreactInputProps['id'];
  accessor name: PreactInputProps['name'];
  get value(): PreactInputProps['value'];
  set value(value: PreactInputProps['value']);
  constructor(renderImpl: RenderImpl);
}

export interface PreactCheckboxProps
  extends Required<
    Pick<
      CheckboxProps,
      | 'accessibilityLabel'
      | 'checked'
      | 'defaultChecked'
      | 'details'
      | 'error'
      | 'label'
      | 'required'
      | 'name'
      | 'disabled'
    >
  > {
  value: Required<CheckboxProps>['value'];
}
declare class PreactCheckboxElement
  extends PreactInputElement
  implements PreactCheckboxProps
{
  get checked(): boolean;
  set checked(checked: PreactCheckboxProps['checked']);
  /**
   * The value used in form data when the checkbox is checked.
   */
  get value(): string;
  set value(value: string);
  accessor defaultChecked: PreactCheckboxProps['defaultChecked'];
  accessor accessibilityLabel: PreactCheckboxProps['accessibilityLabel'];
  accessor details: PreactCheckboxProps['details'];
  accessor error: PreactCheckboxProps['error'];
  accessor label: PreactCheckboxProps['label'];
  accessor required: PreactCheckboxProps['required'];
  /** @private */
  formResetCallback(): void;
  static get observedAttributes(): string[];
  constructor(renderImpl: RenderImpl);
}

export interface SwitchProps
  extends PreactCheckboxProps,
    Required<Pick<SwitchProps$1, 'labelAccessibilityVisibility'>> {}

declare class Switch extends PreactCheckboxElement implements SwitchProps {
  accessor labelAccessibilityVisibility: SwitchProps['labelAccessibilityVisibility'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: Switch;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: SwitchJSXProps & PreactBaseElementProps<Switch>;
    }
  }
}

declare const tagName = 's-switch';
export interface SwitchJSXProps
  extends Partial<SwitchProps>,
    Pick<SwitchProps$1, 'id'> {
  onChange?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  onInput?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}

export {Switch};
export type {SwitchJSXProps};
