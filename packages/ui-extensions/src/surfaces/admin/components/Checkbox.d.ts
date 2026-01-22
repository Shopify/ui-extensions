/** VERSION: 1.38.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  TextFieldProps,
  CheckboxProps$1,
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

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
}

declare const internals: unique symbol;
export type PreactInputProps = Required<
  Pick<TextFieldProps, 'disabled' | 'id' | 'name' | 'value'>
>;
declare class PreactInputElement
  extends PolarisCustomElement
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
      CheckboxProps$1,
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
  value: Required<CheckboxProps$1>['value'];
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

export interface CheckboxProps extends PreactCheckboxProps {
  indeterminate: Required<CheckboxProps$1>['indeterminate'];
  defaultIndeterminate: Required<CheckboxProps$1>['defaultIndeterminate'];
}

declare class Checkbox extends PreactCheckboxElement implements CheckboxProps {
  get indeterminate(): CheckboxProps['indeterminate'];
  set indeterminate(indeterminate: CheckboxProps['indeterminate']);
  accessor defaultIndeterminate: CheckboxProps['defaultIndeterminate'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: Checkbox;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: CheckboxJSXProps & PreactBaseElementProps<Checkbox>;
    }
  }
}

declare const tagName = 's-checkbox';
export interface CheckboxJSXProps
  extends Partial<CheckboxProps>,
    Pick<CheckboxProps$1, 'id'> {
  onChange?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  onInput?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}

export {Checkbox};
export type {CheckboxJSXProps};
