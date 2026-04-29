/** VERSION: 1.67.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  AppNavProps$1,
  PreactCustomElement,
  RenderImpl,
} from './shared.d.ts';

export interface AppNavProps {}

declare const tagName = 's-app-nav';
export interface AppNavJSXProps
  extends Partial<AppNavProps>,
    Pick<AppNavProps$1, 'id'> {}

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
}

declare class AppNav extends PolarisCustomElement implements AppNavProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: AppNav;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: AppNavJSXProps & {
        children?: preact.ComponentChildren;
      };
    }
  }
}

export {AppNav};
export type {AppNavJSXProps};
