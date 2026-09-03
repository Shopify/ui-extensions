/** VERSION: 2.23.0 **/
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
 * Represents button props that are specific to button-type elements only. Extracts the subset of `ButtonProps` that includes the `type` property.
 * @publicDocs
 */
export type ButtonOnlyProps = Extract<
  ButtonProps$1,
  {
    type?: unknown;
  }
>;
/**
 * Represents the base button props with all properties marked as required.
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
 * Configure the following properties on the button component.
 */
export interface ButtonProps extends ButtonBaseProps {
  /**
   * The semantic meaning and color treatment of the component.
   *
   * - `critical`: Urgent problems or destructive actions.
   * - `auto`: Automatically determined based on context.
   * - `neutral`: General information without specific intent.
   *
   * @default 'auto'
   */
  tone: Extract<ButtonProps$1['tone'], 'neutral' | 'critical' | 'auto'>;
  /**
   * An icon displayed inside the button, typically positioned before the button text.
   * Use icons to help users quickly identify the button's action or to improve scannability.
   * Accepts any icon name from the icon library or a custom string identifier.
   *
   * @default ''
   */
  icon: IconProps['type'];
  /**
   * A label that describes the purpose or content of the component for assistive technologies like screen readers. Use this to provide additional context when the visible content alone doesn't clearly convey the component's purpose.
   */
  accessibilityLabel: Required<ButtonOnlyProps>['accessibilityLabel'];
  /**
   * The visual appearance of the button component.
   *
   * - `auto`: The variant is automatically determined by the button component's context.
   * - `primary`: High emphasis button for the primary action on the page. Should be used sparingly.
   * - `secondary`: Medium emphasis button for secondary actions.
   * - `tertiary`: Low emphasis button for less important actions.
   *
   * @default 'auto'
   */
  variant: Required<ButtonOnlyProps>['variant'];
  /**
   * The language of the text content. Use this when the text is in a different language than the rest of the page, allowing assistive technologies such as screen readers to invoke the correct pronunciation. The value should be a valid language subtag from the [IANA language subtag registry](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry).
   */
  lang: Required<ButtonOnlyProps>['lang'];
}

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
  /** @private */
  connectedCallback(): void;
  /** @private */
  adoptedCallback(): void;
}

export interface PreactOverlayControlProps
  extends Pick<InteractionProps, 'commandFor' | 'interestFor'> {
  /**
   * The action that [command](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#command) should take when this component is activated.
   *
   * - `--auto`: A default action for the target component.
   * - `--show`: Shows the target component.
   * - `--hide`: Hides the target component.
   * - `--toggle`: Toggles the visibility of the target component.
   *
   * @default '--auto'
   */
  command: Extract<
    InteractionProps['command'],
    '--show' | '--hide' | '--toggle' | '--auto'
  >;
  /**
   * The component that [commandFor](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#commandfor) should act on when this component is activated.
   */
  commandFor: Extract<InteractionProps['commandFor'], string>;
  /**
   * The ID of the component to show when users hover over or focus on this component. Use this to connect interactive components to popovers or tooltips that provide additional context or information.
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
  accessor disabled: ButtonProps['disabled'];
  accessor loading: ButtonProps['loading'];
  accessor target: ButtonProps['target'];
  accessor href: ButtonProps['href'];
  accessor download: ButtonProps['download'];
  accessor type: ButtonProps['type'];
  accessor accessibilityLabel: ButtonProps['accessibilityLabel'];
  accessor inlineSize: ButtonProps['inlineSize'];
  accessor onclick: CallbackEventListener<TTagName> | null;
  accessor onblur: CallbackEventListener<TTagName> | null;
  accessor onfocus: CallbackEventListener<TTagName> | null;
  abstract icon: string;
  abstract variant: string;
  abstract tone: string;
  constructor(renderImpl: RenderImpl);
}

/**
 * Configure the following properties on the button component.
 * @publicDocs
 */
declare class Button extends ButtonBase<typeof tagName> implements ButtonProps {
  accessor icon: ButtonProps['icon'];
  accessor variant: ButtonProps['variant'];
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
export interface ButtonJSXProps
  extends Partial<ButtonProps>,
    Pick<ButtonProps$1, 'id' | 'children'> {
  /**
   * The label text or elements displayed inside the button component, describing the action that will be performed when clicked.
   */
  children?: ComponentChildren;
  /**
   * A callback fired when the button is clicked.
   */
  onClick?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /**
   * A callback fired when the button receives focus.
   */
  onFocus?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /**
   * A callback fired when the button loses focus.
   */
  onBlur?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}

export {Button};
export type {ButtonJSXProps};
