/** VERSION: 1.64.0 **/
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

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
}

declare abstract class IconBase
  extends PolarisCustomElement
  implements Pick<IconProps, 'color' | 'size' | 'interestFor'>
{
  /**
   * The color emphasis of the icon.
   */
  accessor color: IconProps['color'];
  /**
   * The size of the icon.
   */
  accessor size: IconProps['size'];
  /**
   * The element that this icon should show interest for when activated.
   */
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

/**
 * An icon displays a graphical symbol from the icon library.
 */
declare class Icon extends IconBase implements IconProps {
  /**
   * The color tone of the icon based on its semantic meaning.
   */
  accessor tone: IconProps['tone'];
  /**
   * The type of icon to display.
   */
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
/**
 * The properties for the icon component when it's used in JSX.
 * @publicDocs
 */
export interface IconJSXProps
  extends Partial<IconProps>,
    Pick<IconProps$1, 'id'> {}

export {Icon};
export type {IconJSXProps};
