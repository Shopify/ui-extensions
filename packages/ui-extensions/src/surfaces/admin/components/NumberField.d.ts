/** VERSION: 1.64.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  TextFieldProps,
  NumberFieldProps$1,
  PreactCustomElement,
  RenderImpl,
} from './shared.d.ts';

/**
 * An event object with a strongly-typed `currentTarget` property that references the specific HTML element that triggered the event.
 *
 * This type extends the standard DOM `Event` interface and ensures type safety when accessing the element that fired the event.
 */
export type CallbackEvent<T extends keyof HTMLElementTagNameMap> = Event & {
  currentTarget: HTMLElementTagNameMap[T];
};
/**
 * A function that handles events from UI components.
 *
 * This type represents an event listener callback that receives a `CallbackEvent` with a strongly-typed `currentTarget`.
 * Use this for component event handlers like `click`, `focus`, `blur`, and other DOM events.
 *
 * @example
 * const handleClick: CallbackEventListener<'button'> = (event) => {
 *   console.log('Button clicked:', event.currentTarget);
 * };
 */
export type CallbackEventListener<T extends keyof HTMLElementTagNameMap> =
  | (EventListener & {
      (event: CallbackEvent<T>): void;
    })
  | null;
export interface FieldReactProps<T extends keyof HTMLElementTagNameMap> {
  /**
   * A callback fired when the user makes changes to the field value. This fires before `onChange`.
   */
  onInput?: ((event: CallbackEvent<T>) => void) | null;
  /**
   * A callback fired when the user has finished editing the field, such as when they blur the field.
   */
  onChange?: ((event: CallbackEvent<T>) => void) | null;
  /**
   * A callback fired when the field receives focus.
   */
  onFocus?: ((event: CallbackEvent<T>) => void) | null;
  /**
   * A callback fired when the field loses focus.
   */
  onBlur?: ((event: CallbackEvent<T>) => void) | null;
}
/**
 * Props for field slot content (label, error, details) that accept
 * either a string or JSX content in the React wrapper.
 *
 * Internal use only — not exported publicly. External consumers receive
 * string-only types via FieldSlotPreactProps.
 */
export interface FieldSlotInternalReactProps {
  error?: preact.ComponentChildren;
  details?: preact.ComponentChildren;
}
/**
 * Preact JSX string-only versions of field slot props.
 * Used in Preact module declarations after Omit-ing the ComponentChildren
 * versions (required by force-omit-react-slots lint rule).
 */
export interface FieldSlotPreactProps {
  error?: string;
  details?: string;
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

/**
 * The properties for the number field component. These properties configure a specialized input field for entering numeric values with support for validation, formatting, range constraints, and optimized mobile input modes.
 * @publicDocs
 */
export interface NumberFieldProps
  extends Omit<
      PreactFieldProps<Required<NumberFieldProps$1>['autocomplete']>,
      'value'
    >,
    Required<
      Pick<
        NumberFieldProps$1,
        'inputMode' | 'max' | 'min' | 'prefix' | 'step' | 'suffix'
      >
    > {
  /**
   * The current value for the field, represented as a string.
   */
  value: Required<NumberFieldProps$1>['value'];
}

declare abstract class NumberFieldBase
  extends PreactFieldElement<NumberFieldProps['autocomplete']>
  implements
    Pick<
      NumberFieldProps,
      'inputMode' | 'step' | 'max' | 'min' | 'prefix' | 'suffix' | 'value'
    >
{
  /**
   * The current numeric value in the field as a string. When setting this property programmatically, it updates the field's display value. When reading it, you get the user's current input. The value should be a numeric string (decimal or integer).
   */
  get value(): string;
  set value(value: string);
  /**
   * The input mode hint for mobile keyboards. Available values include:
   * - `numeric`: Shows a numeric keypad optimized for entering numbers
   * - `decimal`: Shows a numeric keypad with decimal point support
   * - `tel`: Shows a telephone keypad
   */
  accessor inputMode: NumberFieldProps['inputMode'];
  /**
   * The granularity that the value must adhere to, or the keyword `any`. This controls the increment/decrement step size.
   */
  accessor step: NumberFieldProps['step'];
  /**
   * The maximum numeric value allowed in the field.
   */
  accessor max: NumberFieldProps['max'];
  /**
   * The minimum numeric value allowed in the field.
   */
  accessor min: NumberFieldProps['min'];
  /**
   * Text or content to display before the user's input, such as a currency symbol.
   */
  accessor prefix: NumberFieldProps['prefix'];
  /**
   * Text or content to display after the user's input, such as a unit of measurement.
   */
  accessor suffix: NumberFieldProps['suffix'];
  constructor(renderImpl: RenderImpl);
}

/**
 * The number field custom element class that renders a numeric input field in the Shopify admin interface. This component allows merchants to enter numbers with automatic validation and prefix/suffix display.
 */
declare class NumberField extends NumberFieldBase implements NumberFieldProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: NumberField;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: Omit<NumberFieldJSXProps, 'error' | 'details'> &
        FieldSlotPreactProps &
        PreactBaseElementProps<NumberField>;
    }
  }
}

declare const tagName = 's-number-field';
/**
 * The JSX props for the number field component. These properties extend `NumberFieldProps` with JSX-specific event callbacks for React-style event handling when used in Preact.
 * @publicDocs
 */
export interface NumberFieldJSXProps
  extends Partial<Omit<NumberFieldProps, 'error' | 'details'>>,
    Pick<NumberFieldProps$1, 'id'>,
    FieldReactProps<typeof tagName>,
    FieldSlotInternalReactProps {}

export {NumberField};
export type {NumberFieldJSXProps};
