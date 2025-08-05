/* VERSION: latest */
/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-namespace */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  BannerProps,
  ComponentChild$1,
  ComponentChildren$1,
  Key,
  Ref,
} from './components-shared.d.ts';

type ComponentChildren = ComponentChildren$1;
type ComponentChild = ComponentChild$1;
/**
 * Used when an element does not have children.
 */
export interface BaseElementProps<TClass = HTMLElement> {
  key?: Key;
  ref?: Ref<TClass>;
  slot?: Lowercase<string>;
}
/**
 * Used when an element has children.
 */
export interface BaseElementPropsWithChildren<TClass = HTMLElement>
  extends BaseElementProps<TClass> {
  children?: ComponentChildren$1;
}

declare const tagName = 's-banner';
type AlignedProps = Pick<BannerProps, 'heading' | 'hidden' | 'tone' | 'id'>;
export interface BannerSlotProps {
  primaryAction?: ComponentChild;
}
export interface BannerJSXProps extends AlignedProps, BannerSlotProps {
  tone?: Extract<
    BannerProps['tone'],
    'success' | 'info' | 'warning' | 'critical'
  >;
  primaryAction?: ComponentChild;
  children?: ComponentChildren;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: BannerJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: BaseElementPropsWithChildren<
        Omit<BannerJSXProps, 'primaryAction'>
      >;
    }
  }
}

export {tagName};
export type {BannerJSXProps, BannerSlotProps};
