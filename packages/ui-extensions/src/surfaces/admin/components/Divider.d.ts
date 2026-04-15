/** VERSION: 1.64.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  DividerProps$1,
  PreactCustomElement,
  RenderImpl,
} from './shared.d.ts';

/**
 * The properties for the divider component. A divider creates a visual separator to distinguish different sections of content.
 * @publicDocs
 */
export interface DividerProps
  extends Pick<DividerProps$1, 'direction' | 'color'> {
  /**
   * The orientation of the divider line, using [logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values).
   *
   * - `inline`: Horizontal divider for separating vertically stacked content
   * - `block`: Vertical divider for separating horizontally arranged content
   *
   * @default 'inline'
   */
  direction: Extract<DividerProps$1['direction'], 'inline' | 'block'>;
  /**
   * The visual prominence of the divider line.
   *
   * - `base`: Standard divider for most separations (default)
   * - `strong`: More prominent divider for major section breaks
   *
   * @default 'base'
   */
  color: Extract<DividerProps$1['color'], 'base' | 'strong'>;
}

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
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
 * A divider is a visual separator that creates a line between different sections of content.
 */
declare class Divider extends PolarisCustomElement implements DividerProps {
  /**
   * The orientation of the divider line, using [logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values).
   *
   * - `inline`: Horizontal divider for separating vertically stacked content
   * - `block`: Vertical divider for separating horizontally arranged content
   *
   * @default 'inline'
   */
  accessor direction: DividerProps['direction'];
  /**
   * The visual prominence of the divider line.
   *
   * - `base`: Standard divider for most separations (default)
   * - `strong`: More prominent divider for major section breaks
   *
   * @default 'base'
   */
  accessor color: DividerProps['color'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: Divider;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: DividerJSXProps & PreactBaseElementProps<Divider>;
    }
  }
}

declare const tagName = 's-divider';
/**
 * The properties for the divider component when it's used in JSX.
 * @publicDocs
 */
export interface DividerJSXProps
  extends Partial<DividerProps>,
    Pick<DividerProps$1, 'id'> {}

export {Divider};
export type {DividerJSXProps};
