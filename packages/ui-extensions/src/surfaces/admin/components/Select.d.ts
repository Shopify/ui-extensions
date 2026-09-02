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
  ComponentChildren,
  TextFieldProps,
  IconProps$1,
  SelectProps$1,
  PreactCustomElement,
  RenderImpl,
  IconType,
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
/**
 * Base props for Preact custom elements with children support. Extends PreactBaseElementProps with the ability to render child elements.
 * @publicDocs
 */
export interface PreactBaseElementPropsWithChildren<TClass extends HTMLElement>
  extends PreactBaseElementProps<TClass> {
  /**
   * The child elements to be rendered within this component.
   */
  children?: preact.ComponentChildren;
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

/**
 * Configure the following properties on the icon component.
 */
export interface IconProps
  extends Required<
    Pick<IconProps$1, 'type' | 'tone' | 'color' | 'size' | 'interestFor'>
  > {
  /**
   * The icon to display from the icon library.
   *
   * Set to a valid icon name to display that icon. To hide the icon completely,
   * use an empty string `''`. To reserve the icon's space without displaying an icon,
   * use `'empty'`.
   */
  type: '' | IconType | 'empty';
  /**
   * The semantic meaning and color treatment of the component.
   *
   * - `info`: Informational content or helpful tips.
   * - `success`: Positive outcomes or successful states.
   * - `warning`: Important warnings about potential issues.
   * - `critical`: Urgent problems or destructive actions.
   * - `auto`: Automatically determined based on context.
   * - `neutral`: General information without specific intent.
   * - `caution`: Advisory notices that need attention.
   *
   * @default 'auto'
   */
  tone: Extract<
    IconProps$1['tone'],
    'auto' | 'neutral' | 'info' | 'success' | 'caution' | 'warning' | 'critical'
  >;
  /**
   * The color emphasis level that controls visual intensity.
   *
   * - `base`: Primary color for body text, standard UI elements, and general content with good readability.
   * - `subdued`: Deemphasized color for secondary text, supporting labels, and less critical interface elements.
   *
   * @default 'base'
   */
  color: Extract<IconProps$1['color'], 'base' | 'subdued'>;
  /**
   * The size of the icon.
   *
   * - `small`: Smaller icon suitable for inline use within text or compact UI elements.
   * - `base`: Default size that works well for standalone icons and standard use cases.
   */
  size: Extract<IconProps$1['size'], 'small' | 'base'>;
}

/**
 * Configure the following properties on the select component.
 */
export interface SelectProps
  extends Omit<PreactInputProps, 'value'>,
    Required<
      Pick<
        SelectProps$1,
        | 'details'
        | 'disabled'
        | 'error'
        | 'label'
        | 'name'
        | 'placeholder'
        | 'required'
        | 'icon'
        | 'labelAccessibilityVisibility'
      >
    > {
  value: Required<SelectProps$1>['value'];
  icon: IconProps['type'];
}

declare const usedFirstOptionSymbol: unique symbol;
declare const hasInitialValueSymbol: unique symbol;

declare abstract class SelectBase
  extends PreactInputElement
  implements
    Pick<
      SelectProps,
      | 'icon'
      | 'details'
      | 'error'
      | 'label'
      | 'placeholder'
      | 'required'
      | 'labelAccessibilityVisibility'
    >
{
  accessor icon: SelectProps['icon'];
  accessor details: SelectProps['details'];
  accessor error: SelectProps['error'];
  accessor label: SelectProps['label'];
  accessor placeholder: SelectProps['placeholder'];
  accessor required: SelectProps['required'];
  accessor labelAccessibilityVisibility: SelectProps['labelAccessibilityVisibility'];
  /** @private */
  connectedCallback(): void;
  /** @private */
  disconnectedCallback(): void;
  constructor(renderImpl: RenderImpl);
  /**
   * used to determine if no value or defaultValue was set, in which case the first non-disabled option was used
   *
   * this is important because we need to use the placeholder in these situations, even though the first value will be submitted as part of the form
   * @private
   */
  [usedFirstOptionSymbol]: boolean;
  /**
   * @private
   */
  [hasInitialValueSymbol]: boolean;
  get value(): string;
  set value(value: string);
  /** @private */
  formResetCallback(): void;
}

/**
 * Configure the following properties on the select component.
 * @publicDocs
 */
declare class Select extends SelectBase implements SelectProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: Select;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: Omit<SelectJSXProps, 'error' | 'details'> &
        FieldSlotPreactProps &
        PreactBaseElementPropsWithChildren<Select>;
    }
  }
}

declare const tagName = 's-select';
export interface SelectJSXProps
  extends Partial<Omit<SelectProps, 'error' | 'details'>>,
    Pick<SelectProps$1, 'id' | 'children'>,
    FieldSlotInternalReactProps {
  /**
   * The selectable options displayed in the dropdown list. Accepts option components for individual selectable items, and option group components to organize related options into logical groups with labels.
   */
  children?: ComponentChildren;
  onChange?: (event: CallbackEvent<typeof tagName>) => void;
  onInput?: (event: CallbackEvent<typeof tagName>) => void;
  onBlur?: (event: CallbackEvent<typeof tagName>) => void;
  onFocus?: (event: CallbackEvent<typeof tagName>) => void;
}

export {Select};
export type {SelectJSXProps};
