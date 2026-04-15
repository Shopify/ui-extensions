/** VERSION: 1.64.0 **/
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
  accessor onblur: CallbackEventListener<'input'>;
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

/**
 * Properties for rendering a checkbox that supports checked, unchecked, and indeterminate states for complex selection scenarios.
 * @publicDocs
 */
export interface CheckboxProps extends PreactCheckboxProps {
  /**
   * Whether the checkbox is in an indeterminate state, showing a dash instead of a checkmark to represent a partial selection.
   */
  indeterminate: Required<CheckboxProps$1>['indeterminate'];
  /**
   * Whether the checkbox should be in an indeterminate state when it's first rendered, useful for partial selection scenarios.
   */
  defaultIndeterminate: Required<CheckboxProps$1>['defaultIndeterminate'];
  labelAccessibilityVisibility: Required<CheckboxProps$1>['labelAccessibilityVisibility'];
}

declare abstract class CheckboxBase
  extends PreactCheckboxElement
  implements
    Pick<
      CheckboxProps,
      'defaultIndeterminate' | 'indeterminate' | 'labelAccessibilityVisibility'
    >
{
  /**
   * Whether the checkbox is in an indeterminate state, showing a dash instead of a checkmark.
   */
  get indeterminate(): CheckboxProps['indeterminate'];
  set indeterminate(indeterminate: CheckboxProps['indeterminate']);
  /**
   * Whether the checkbox should be in an indeterminate state when it's first rendered.
   */
  accessor defaultIndeterminate: CheckboxProps['defaultIndeterminate'];
  accessor labelAccessibilityVisibility: CheckboxProps['labelAccessibilityVisibility'];
  constructor(renderImpl: RenderImpl);
}

/**
 * A checkbox that lets users select or deselect an option, with support for an indeterminate state.
 */
declare class Checkbox extends CheckboxBase implements CheckboxProps {
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
      [tagName]: Omit<CheckboxJSXProps, 'error' | 'details'> &
        FieldSlotPreactProps &
        PreactBaseElementProps<Checkbox>;
    }
  }
}

declare const tagName = 's-checkbox';
/**
 * Props for using the checkbox component in JSX with React-style event handlers.
 * @publicDocs
 */
export interface CheckboxJSXProps
  extends Partial<Omit<CheckboxProps, 'error' | 'details'>>,
    Pick<CheckboxProps$1, 'id'>,
    FieldSlotInternalReactProps {
  /**
   * A callback that's triggered when the checkbox's checked state changes and it loses focus.
   */
  onChange?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /**
   * A callback that's triggered when the checkbox's checked state changes.
   */
  onInput?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  onBlur?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}

export {Checkbox};
export type {CheckboxJSXProps};
