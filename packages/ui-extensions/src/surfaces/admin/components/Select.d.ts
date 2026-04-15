/** VERSION: 1.64.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

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
/** Used when an element has children. */
export interface PreactBaseElementPropsWithChildren<TClass extends HTMLElement>
  extends PreactBaseElementProps<TClass> {
  children?: preact.ComponentChildren;
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

export interface IconProps
  extends Required<
    Pick<IconProps$1, 'type' | 'tone' | 'color' | 'size' | 'interestFor'>
  > {
  /**
   * The type of icon that will be displayed. You can specify an icon name from the available icon set, or use an empty string to show no icon.
   */
  type: '' | IconType | 'empty';
  /**
   * The color tone of the icon based on its semantic meaning. Choose from `'auto'` to let the icon inherit its context, `'neutral'` for standard icons, `'info'` for informational content, `'success'` for positive actions, `'caution'` or `'warning'` for warnings, or `'critical'` for errors.
   *
   * @default 'auto'
   */
  tone: Extract<
    IconProps$1['tone'],
    'auto' | 'neutral' | 'info' | 'success' | 'caution' | 'warning' | 'critical'
  >;
  /**
   * The color emphasis of the icon. Use `'base'` for the standard color intensity, or `'subdued'` for a lighter, less prominent appearance.
   *
   * @default 'base'
   */
  color: Extract<IconProps$1['color'], 'base' | 'subdued'>;
  /**
   * The size of the icon. Use `'small'` for compact layouts, or `'base'` for standard sizing.
   *
   * @default 'base'
   */
  size: Extract<IconProps$1['size'], 'small' | 'base'>;
}

/**
 * Properties for rendering a select dropdown that lets users choose one option from a list with optional icon and label customization.
 * @publicDocs
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
  /**
   * The value of the currently selected option, matching one of the `value` properties from the available options.
   */
  value: Required<SelectProps$1>['value'];
  /**
   * An icon that's displayed at the start of the select field to provide visual context for the selection.
   */
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
  /**
   * An icon that's displayed at the start of the select field.
   */
  accessor icon: SelectProps['icon'];
  /**
   * Additional text to provide context or guidance for the select.
   */
  accessor details: SelectProps['details'];
  /**
   * An error message that's displayed below the select when validation fails.
   */
  accessor error: SelectProps['error'];
  /**
   * The text that describes what the select is for.
   */
  accessor label: SelectProps['label'];
  /**
   * Text that appears in the select when no option is selected to provide a hint about what to choose.
   */
  accessor placeholder: SelectProps['placeholder'];
  /**
   * Whether an option must be selected before the form can be submitted.
   */
  accessor required: SelectProps['required'];
  /**
   * Controls whether the label is visible to all users or only to screen readers.
   */
  accessor labelAccessibilityVisibility: SelectProps['labelAccessibilityVisibility'];
  /** @private */
  connectedCallback(): void;
  /**
   * A lifecycle callback that fires when the component is removed from the DOM. Performs cleanup operations.
   * @private
   */
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
  /**
   * The value of the currently selected option. When setting this property programmatically, it updates which option appears selected in the dropdown. When reading it, you get the `value` attribute of the currently selected Option component.
   */
  get value(): string;
  set value(value: string);
  /** @private */
  formResetCallback(): void;
}

/**
 * A select dropdown that lets users choose one option from a list.
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
/**
 * Properties for using the select component in JSX with React-style event handlers.
 * @publicDocs
 */
export interface SelectJSXProps
  extends Partial<Omit<SelectProps, 'error' | 'details'>>,
    Pick<SelectProps$1, 'id' | 'children'>,
    FieldSlotInternalReactProps {
  /**
   * The selectable options displayed in the dropdown list.
   *
   * Accepts option components for individual selectable items, and option group components to organize related options into logical groups with labels.
   */
  children?: ComponentChildren;
  /**
   * A callback that's triggered when the selected option changes and the select loses focus.
   */
  onChange?: (event: CallbackEvent<typeof tagName>) => void;
  /**
   * A callback that's triggered when the selected option changes as the user interacts with the dropdown.
   */
  onInput?: (event: CallbackEvent<typeof tagName>) => void;
  /**
   * A callback that's triggered when the select loses focus after the user interacts with it.
   */
  onBlur?: (event: CallbackEvent<typeof tagName>) => void;
  /**
   * A callback that's triggered when the select receives focus from the user.
   */
  onFocus?: (event: CallbackEvent<typeof tagName>) => void;
}

export {Select};
export type {SelectJSXProps};
