/** VERSION: 1.38.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  TextFieldProps,
  DateAutocompleteField,
  DateFieldProps$1,
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

export type PreactFieldProps<Autocomplete extends string = string> =
  PreactInputProps &
    Required<
      Pick<
        TextFieldProps,
        | 'defaultValue'
        | 'details'
        | 'error'
        | 'label'
        | 'labelAccessibilityVisibility'
        | 'placeholder'
        | 'readOnly'
        | 'required'
      >
    > & {
      /**
       * A hint as to the intended content of the field.
       *
       * When set to `on` (the default), this property indicates that the field should support
       * autofill, but you do not have any more semantic information on the intended
       * contents.
       *
       * When set to `off`, you are indicating that this field contains sensitive
       * information, or contents that are never saved, like one-time codes.
       *
       * Alternatively, you can provide value which describes the
       * specific data you would like to be entered into this field during autofill.
       *
       * @see Learn more about the set of {@link https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill-detail-tokens|autocomplete values} supported in browsers.
       *
       * @default 'tel' for PhoneField
       * @default 'email' for EmailField
       * @default 'url' for URLField
       * @default 'on' for everything else
       */
      autocomplete: Autocomplete;
    };
declare class PreactFieldElement<Autocomplete extends string = string>
  extends PreactInputElement
  implements PreactFieldProps<Autocomplete>
{
  accessor onblur: CallbackEventListener<'input'>;
  accessor onfocus: CallbackEventListener<'input'>;
  accessor autocomplete: PreactFieldProps<Autocomplete>['autocomplete'];
  accessor defaultValue: PreactFieldProps['defaultValue'];
  accessor details: PreactFieldProps['details'];
  accessor error: PreactFieldProps['error'];
  accessor label: PreactFieldProps['label'];
  accessor labelAccessibilityVisibility: PreactFieldProps['labelAccessibilityVisibility'];
  accessor placeholder: PreactFieldProps['placeholder'];
  accessor readOnly: PreactFieldProps['readOnly'];
  accessor required: PreactFieldProps['required'];
  /**
   * Global keyboard event handlers for things like key bindings typically
   * ignore keystrokes originating from within input elements. Unfortunately,
   * these never account for a Custom Element being the input element.
   *
   * To fix this, we spoof getAttribute & hasAttribute to make a PreactFieldElement
   * appear as a contentEditable "input" when it contains a focused input element.
   * @private technically not private, but we don't want to expose this as public API
   */
  getAttribute(qualifiedName: string): string | null;
  /**
   * @private technically not private, but we don't want to expose this as public API
   */
  hasAttribute(qualifiedName: string): boolean;
  /**
   * Checks if the shadow tree contains a focused input (input, textarea, select, <x contentEditable>).
   * Note: this does _not_ return true for focussed non-field form elements like buttons.
   * @private
   */
  get isContentEditable(): boolean;
  /** @private */
  formResetCallback(): void;
  /** @private */
  connectedCallback(): void;
  constructor(renderImpl: RenderImpl);
}

export interface DateFieldProps
  extends PreactFieldProps<DateAutocompleteField>,
    Required<
      Pick<
        DateFieldProps$1,
        | 'allow'
        | 'allowDays'
        | 'disallow'
        | 'disallowDays'
        | 'value'
        | 'defaultValue'
        | 'view'
        | 'defaultView'
      >
    > {}

declare class DateField
  extends PreactFieldElement<DateFieldProps['autocomplete']>
  implements DateFieldProps
{
  accessor allow: DateFieldProps['allow'];
  accessor disallow: DateFieldProps['disallow'];
  accessor allowDays: DateFieldProps['allowDays'];
  accessor disallowDays: DateFieldProps['disallowDays'];
  set view(view: string);
  get view(): string;
  accessor defaultView: DateFieldProps['defaultView'];
  accessor onviewchange: CallbackEventListener<typeof tagName> | null;
  accessor oninvalid: CallbackEventListener<typeof tagName> | null;
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: DateField;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: DateFieldJSXProps & PreactBaseElementProps<DateField>;
    }
  }
}

declare const tagName = 's-date-field';
export interface DateFieldJSXProps
  extends Partial<DateFieldProps>,
    Pick<DateFieldProps$1, 'id'> {
  onBlur?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  onChange?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  onFocus?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  onInput?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  onInvalid?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  onViewChange?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}

export {DateField};
export type {DateFieldJSXProps};
