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
  IconProps$1,
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

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
  /** @private */
  connectedCallback(): void;
  /** @private */
  adoptedCallback(): void;
}

declare abstract class IconBase
  extends PolarisCustomElement
  implements Pick<IconProps, 'color' | 'size' | 'interestFor'>
{
  accessor color: IconProps['color'];
  accessor size: IconProps['size'];
  accessor interestFor: IconProps['interestFor'];
  abstract tone: string;
  abstract type: string;
  constructor(renderImpl: RenderImpl);
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
 * Configure the following properties on the icon component.
 * @publicDocs
 */
declare class Icon extends IconBase implements IconProps {
  accessor tone: IconProps['tone'];
  accessor type: IconProps['type'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: Icon;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: IconJSXProps & PreactBaseElementProps<Icon>;
    }
  }
}

declare const tagName = 's-icon';
export interface IconJSXProps
  extends Partial<IconProps>,
    Pick<IconProps$1, 'id'> {}

export {Icon};
export type {IconJSXProps};
