/** VERSION: 1.38.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  IconProps$1,
  IconType,
  PreactCustomElement,
  RenderImpl,
} from './shared.d.ts';

export interface IconProps
  extends Required<
    Pick<IconProps$1, 'type' | 'tone' | 'color' | 'size' | 'interestFor'>
  > {
  /**
   * Specifies the type of icon that will be displayed.
   */
  type: '' | IconType | 'empty';
  tone: Extract<
    IconProps$1['tone'],
    'auto' | 'neutral' | 'info' | 'success' | 'caution' | 'warning' | 'critical'
  >;
  color: Extract<IconProps$1['color'], 'base' | 'subdued'>;
  size: Extract<IconProps$1['size'], 'small' | 'base'>;
}

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
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

/** Used when an element does not have children. */
export interface PreactBaseElementProps<TClass extends HTMLElement> {
  /** Assigns a unique key to this element. */
  key?: preact.Key;
  /** Assigns a ref (generally from `useRef()`) to this element. */
  ref?: preact.Ref<TClass>;
  /** Assigns this element to a parent's slot. */
  slot?: Lowercase<string>;
}

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
