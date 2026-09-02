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
  IconProps$1,
  BadgeProps$1,
  IconType,
  PreactCustomElement,
  RenderImpl,
} from './shared.d.ts';
import * as preact$1 from 'preact';
import {ReactNode, RefAttributes} from 'react';

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
 * Configure the following properties on the badge component.
 */
export interface BadgeProps
  extends Pick<BadgeProps$1, 'color' | 'icon' | 'size' | 'tone'> {
  /**
   * Controls the visual weight and emphasis of the badge.
   *
   * - `base`: Standard weight with moderate emphasis, suitable for most use cases.
   * - `strong`: Increased visual weight for higher emphasis and prominence.
   *
   * @default 'base'
   */
  color: Extract<BadgeProps$1['color'], 'base' | 'strong'>;
  /**
   * An icon displayed inside the badge to provide additional visual context or reinforce the badge's meaning.
   * Accepts any icon name from the icon library or a custom string identifier.
   *
   * @default ''
   */
  icon: IconProps['type'] | '';
  /**
   * The size of the badge.
   *
   * - `base`: Default size suitable for most badge use cases.
   * - `large`: Larger badge for increased visibility and prominence.
   * - `large-100`: Extra large badge for maximum visibility in emphasized contexts.
   */
  size: Extract<BadgeProps$1['size'], 'base' | 'large' | 'large-100'>;
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
    BadgeProps$1['tone'],
    'auto' | 'neutral' | 'info' | 'success' | 'caution' | 'warning' | 'critical'
  >;
}

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
  /** @private */
  connectedCallback(): void;
  /** @private */
  adoptedCallback(): void;
}

declare abstract class BadgeBase
  extends PolarisCustomElement
  implements Pick<BadgeProps, 'color' | 'size'>
{
  accessor color: BadgeProps['color'];
  accessor size: BadgeProps['size'];
  abstract tone: string;
  abstract icon: string;
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
}

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

/**
 * Configure the following properties on the badge component.
 * @publicDocs
 */
declare class Badge extends BadgeBase implements BadgeProps {
  accessor icon: BadgeProps['icon'];
  accessor tone: BadgeProps['tone'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: Badge;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: BadgeJSXProps & PreactBaseElementPropsWithChildren<Badge>;
    }
  }
}

declare const tagName = 's-badge';
export interface BadgeJSXProps
  extends Partial<BadgeProps>,
    Pick<BadgeProps$1, 'id' | 'children'> {
  /**
   * The text label displayed within the badge component, typically a short status indicator or category label.
   */
  children?: ComponentChildren;
}

export {Badge};
export type {BadgeJSXProps};
