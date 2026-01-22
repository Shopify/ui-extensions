/** VERSION: 1.38.0 **/
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

export interface DividerProps
  extends Pick<DividerProps$1, 'direction' | 'color'> {
  direction: Extract<DividerProps$1['direction'], 'inline' | 'block'>;
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

declare class Divider extends PolarisCustomElement implements DividerProps {
  accessor direction: DividerProps['direction'];
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
export interface DividerJSXProps
  extends Partial<DividerProps>,
    Pick<DividerProps$1, 'id'> {}

export {Divider};
export type {DividerJSXProps};
