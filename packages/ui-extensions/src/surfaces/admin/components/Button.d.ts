/** VERSION: 1.64.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  ComponentChildren,
  IconProps$1,
  ButtonProps$1,
  IconType,
  InteractionProps,
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
 * The button-specific properties extracted from the base button props type, used internally for type safety.
 * @publicDocs
 */
export type ButtonOnlyProps = Extract<
  ButtonProps$1,
  {
    type?: unknown;
  }
>;
/**
 * The base required properties for the button component, including all essential button configuration options. This type ensures all button properties have default values.
 * @publicDocs
 */
export type ButtonBaseProps = Required<
  Pick<
    ButtonOnlyProps,
    | 'accessibilityLabel'
    | 'disabled'
    | 'command'
    | 'commandFor'
    | 'icon'
    | 'interestFor'
    | 'lang'
    | 'loading'
    | 'type'
    | 'tone'
    | 'variant'
    | 'target'
    | 'href'
    | 'download'
    | 'inlineSize'
  >
>;
/**
 * The properties for the button component. Buttons trigger actions or navigation when clicked, with customizable visual styles, states, and optional icons.
 * @publicDocs
 */
export interface ButtonProps extends ButtonBaseProps {
  /**
   * Determines the visual appearance and semantic meaning of the button. Buttons rely on the tone system for semantic meaning, so using custom styling might not clearly convey intent to merchants. Available options:
   * - `'auto'` - Lets the system automatically choose the appropriate tone based on context.
   * - `'neutral'` - Standard styling for general actions without specific semantic meaning.
   * - `'critical'` - Red styling for destructive actions that can't be undone, such as deleting data.
   *
   * @default 'auto'
   */
  tone: Extract<ButtonProps$1['tone'], 'neutral' | 'critical' | 'auto'>;
  /**
   * The icon to display inside the button. Accepts any valid icon type or an empty string to display no icon.
   *
   * @default ''
   */
  icon: IconProps['type'];
}

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
}

export interface PreactOverlayControlProps
  extends Pick<InteractionProps, 'commandFor' | 'interestFor'> {
  /**
   * Sets the action the [command](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#command) should take when this clickable is activated.
   *
   * See the documentation of particular components for the actions they support.
   *
   * - `--auto`: a default action for the target component.
   * - `--show`: shows the target component.
   * - `--hide`: hides the target component.
   * - `--toggle`: toggles the target component.
   *
   * @default '--auto'
   */
  command: Extract<
    InteractionProps['command'],
    '--show' | '--hide' | '--toggle' | '--auto'
  >;
  /**
   * Sets the element the [commandFor](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#commandfor) should act on when this clickable is activated.
   */
  commandFor: Extract<InteractionProps['commandFor'], string>;
  /**
   * Sets the element the [interestFor](https://open-ui.org/components/interest-invokers.explainer/#the-pitch-in-code) should act on when this clickable is activated.
   */
  interestFor: Extract<InteractionProps['interestFor'], string>;
}

declare const ButtonBase_base: (abstract new (
  renderImpl: Omit<RenderImpl, 'globalShadowCSS'>,
) => PolarisCustomElement & PreactOverlayControlProps) &
  Pick<typeof PolarisCustomElement, 'prototype' | 'observedAttributes'>;
declare abstract class ButtonBase<TTagName extends keyof HTMLElementTagNameMap>
  extends ButtonBase_base
  implements
    Pick<
      ButtonProps,
      | 'disabled'
      | 'loading'
      | 'target'
      | 'href'
      | 'download'
      | 'type'
      | 'accessibilityLabel'
      | 'inlineSize'
    >
{
  /**
   * Whether the button is disabled, preventing any interaction. When `true`, the button appears visually disabled and doesn't respond to user clicks.
   */
  accessor disabled: ButtonProps['disabled'];
  /**
   * Whether the button is in a loading state. When `true`, displays a loading indicator and prevents interaction to show that an action is in progress.
   */
  accessor loading: ButtonProps['loading'];
  /**
   * Specifies where to open the linked document when the button acts as a link. Available options: `''`, `'_blank'`, `'_self'`, `'_parent'`, or `'_top'`.
   */
  accessor target: ButtonProps['target'];
  /**
   * A URL that the button should navigate to when clicked. When provided, the button behaves as a link.
   */
  accessor href: ButtonProps['href'];
  /**
   * Prompts the user to save the linked URL as a file with the specified filename. Only works when `href` is provided.
   */
  accessor download: ButtonProps['download'];
  /**
   * The button's behavior in forms. Available options: `'button'`, `'submit'`, or `'reset'`.
   */
  accessor type: ButtonProps['type'];
  /**
   * A text description of the button's purpose for screen readers. This is essential for accessibility when the button doesn't have visible text.
   */
  accessor accessibilityLabel: ButtonProps['accessibilityLabel'];
  accessor inlineSize: ButtonProps['inlineSize'];
  /**
   * A callback that's invoked when the button is clicked. Receives the click event as an argument.
   */
  accessor onclick: CallbackEventListener<TTagName> | null;
  /**
   * A callback that's invoked when the button loses focus. Receives the blur event as an argument.
   */
  accessor onblur: CallbackEventListener<TTagName> | null;
  /**
   * A callback that's invoked when the button receives focus. Receives the focus event as an argument.
   */
  accessor onfocus: CallbackEventListener<TTagName> | null;
  abstract icon: string;
  abstract variant: string;
  abstract tone: string;
  constructor(renderImpl: RenderImpl);
}

/**
 * The button custom element class that renders interactive buttons in the Shopify admin interface. This component triggers actions or navigation when clicked, with customizable visual styles, states, and optional icons.
 */
declare class Button extends ButtonBase<typeof tagName> implements ButtonProps {
  /**
   * The icon to display inside the button. Accepts any valid icon type from the admin icon set, or an empty string to display no icon.
   */
  accessor icon: ButtonProps['icon'];
  /**
   * The visual style variant of the button that determines its emphasis. Available options: `'primary'`, `'secondary'`, `'tertiary'`, or `'plain'`.
   */
  accessor variant: ButtonProps['variant'];
  /**
   * The tone that determines the button's visual appearance and semantic meaning. Available options: `'auto'`, `'neutral'`, or `'critical'`.
   */
  accessor tone: ButtonProps['tone'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: Button;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: ButtonJSXProps & PreactBaseElementPropsWithChildren<Button>;
    }
  }
}

declare const tagName = 's-button';
/**
 * The JSX props for the button component. These properties extend `ButtonProps` with event callbacks and additional options for rendering buttons in JSX.
 * @publicDocs
 */
export interface ButtonJSXProps
  extends Partial<ButtonProps>,
    Pick<ButtonProps$1, 'id' | 'children'> {
  /**
   * The text label or content to display inside the button. Can be plain text or other components.
   */
  children?: ComponentChildren;
  /**
   * Callback function that's invoked when the button is clicked. Receives the click event as an argument.
   */
  onClick?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /**
   * Callback function that's invoked when the button receives focus. Receives the focus event as an argument.
   */
  onFocus?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /**
   * Callback function that's invoked when the button loses focus. Receives the blur event as an argument.
   */
  onBlur?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}

export {Button};
export type {ButtonJSXProps};
