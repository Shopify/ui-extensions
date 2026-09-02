/** VERSION: 2.23.0 **/
/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable line-comment-position */
/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable no-var */
/* eslint-disable import/no-deprecated */
/* eslint-disable import/namespace */
/* eslint-disable import/no-deprecated */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  TextFieldProps,
  CheckboxProps$1,
  PreactCustomElement,
  RenderImpl,
} from './shared.d.ts';
import * as preact$1 from 'preact';
import {ReactNode, RefAttributes} from 'react';

/**
 * An event object with a strongly-typed `currentTarget` property that references the specific HTML element that triggered the event.
 *
 * This type extends the standard DOM `Event` interface and ensures type safety when accessing the element that fired the event.
 * @publicDocs
 */
export type CallbackEvent<T extends keyof HTMLElementTagNameMap> = Event & {
  currentTarget: HTMLElementTagNameMap[T];
};
/**
 * A function that handles events from UI components.
 *
 * This type represents an event listener callback that receives a `CallbackEvent` with a strongly-typed `currentTarget`. Use this for component event handlers like `click`, `focus`, `blur`, and other DOM events.
 *
 * @example
 * const handleClick: CallbackEventListener<'button'> = (event) => {
 *   console.log('Button clicked:', event.currentTarget);
 * };
 * @publicDocs
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
export type FieldSlotInternalReactProps = {
  error?: preact.ComponentChildren;
  details?: preact.ComponentChildren;
};
/**
 * Preact JSX string-only versions of field slot props.
 * Used in Preact module declarations after Omit-ing the ComponentChildren
 * versions (required by force-omit-react-slots lint rule).
 */
export type FieldSlotPreactProps = {
  error?: string;
  details?: string;
};
/**
 * Base props for Preact custom elements without children support. Includes common properties like key, ref, and slot for elements that don't accept child content.
 * @publicDocs
 */
export interface PreactBaseElementProps<TClass extends HTMLElement> {
  /**
   * A unique identifier for this element, used by the virtual DOM to efficiently track and update elements in lists.
   * Essential for maintaining component state and optimizing re-renders when lists change.
   */
  key?: preact.Key;
  /**
   * A reference to access the underlying DOM element directly.
   * Typically created using `useRef()` to interact with the element imperatively or measure its properties.
   */
  ref?: preact.Ref<TClass>;
  /**
   * The named slot to which this element is assigned in the parent component's shadow DOM.
   *
   * Used for advanced component composition with web components.
   */
  slot?: Lowercase<string>;
}

export type ReactIntrinsicElementChildren<PreactProps extends object> =
  'children' extends keyof PreactProps
    ? {
        children?: ReactNode;
      }
    : Record<never, never>;
export type ReactIntrinsicElementProps<
  PreactProps extends object,
  ElementType,
> = Omit<PreactProps, 'children' | 'key' | 'ref' | 'slot'> &
  ReactIntrinsicElementChildren<PreactProps> &
  RefAttributes<ElementType> & {
    slot?: Lowercase<string>;
  };
export type ReactIntrinsicElements = {
  [Tag in Exclude<
    Extract<keyof preact$1.createElement.JSX.IntrinsicElements, `s-${string}`>,
    `s-test-${string}`
  >]: ReactIntrinsicElementProps<
    preact$1.createElement.JSX.IntrinsicElements[Tag],
    Tag extends keyof HTMLElementTagNameMap
      ? HTMLElementTagNameMap[Tag]
      : HTMLElement
  >;
};
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends ReactIntrinsicElements {}
  }
}

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
  /** @private */
  connectedCallback(): void;
  /** @private */
  adoptedCallback(): void;
}

declare const internals: unique symbol;
/**
 * Represents the essential input props required for Preact-based input elements. Includes properties like `disabled`, `id`, `name`, and `value`.
 * @publicDocs
 */
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
  /**
   * The value used in form data when the checkbox is checked.
   */
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
 * Configure the following properties on the checkbox component.
 */
export interface CheckboxProps extends PreactCheckboxProps {
  /**
   * Whether the checkbox displays in an indeterminate state (neither checked nor unchecked),
   * typically used to indicate partial selection in hierarchical lists.
   *
   * This visual state takes priority over the `checked` prop in appearance only.
   * The form submission value is still determined by the `checked` prop.
   *
   * If `indeterminate` has not been explicitly set and hasn't been modified by user interaction,
   * it returns the value of `defaultIndeterminate`.
   */
  indeterminate: Required<CheckboxProps$1>['indeterminate'];
  /**
   * The initial indeterminate state for uncontrolled components. Use this when you want the checkbox to start
   * in an indeterminate state but don't need to control it afterward.
   *
   * This value applies until `indeterminate` is explicitly set or the user changes the checkbox state by clicking.
   *
   * @default false
   */
  defaultIndeterminate: Required<CheckboxProps$1>['defaultIndeterminate'];
  /**
   * Whether the field needs a value. This requirement adds semantic value
   * to the field, but it will not cause an error to appear automatically.
   * If you want to present an error when this field is empty, you can do
   * so with the `error` property.
   *
   * @default false
   */
  required: Required<CheckboxProps$1>['required'];
  /**
   * Changes the visibility of the component's label.
   *
   * - `visible`: the label is visible to all users.
   * - `exclusive`: the label is visually hidden but remains in the accessibility tree.
   *
   * @default 'visible'
   */
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
  get indeterminate(): CheckboxProps['indeterminate'];
  set indeterminate(indeterminate: CheckboxProps['indeterminate']);
  accessor defaultIndeterminate: CheckboxProps['defaultIndeterminate'];
  accessor labelAccessibilityVisibility: CheckboxProps['labelAccessibilityVisibility'];
  constructor(renderImpl: RenderImpl);
}

/**
 * Configure the following properties on the checkbox component.
 * @publicDocs
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
export interface CheckboxJSXProps
  extends Partial<Omit<CheckboxProps, 'error' | 'details'>>,
    Pick<CheckboxProps$1, 'id'>,
    FieldSlotInternalReactProps {
  /**
   * A callback fired when the checkbox state changes and the user has finished interacting with it.
   */
  onChange?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /**
   * A callback fired when the checkbox state changes, including intermediate states during user interaction.
   */
  onInput?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  onBlur?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}

export {Checkbox};
export type {CheckboxJSXProps};
