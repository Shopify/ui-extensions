/** VERSION: undefined **/
/* eslint-disable import-x/extensions */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable line-comment-position */
/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable no-var */
/* eslint-disable import-x/namespace */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {ImageProps,BorderRadiusKeyword,MaybeAllValuesShorthandProperty,Key, Ref} from './components-shared.d.ts';

export type ComponentChildren = any;
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
export interface BaseElementPropsWithChildren<TClass = HTMLElement> extends BaseElementProps<TClass> {
    children?: ComponentChildren;
}
export type IntrinsicElementProps<T> = T & BaseElementPropsWithChildren<T & HTMLElement>;
export type HtmlElementTagNameProps<T> = T & HTMLElement;

declare const tagName = "s-image";
export interface ImageJSXProps extends Pick<ImageProps, 'id' | 'objectFit' | 'alt'> {
    /**
     * The displayed inline width of the image.
     *
     * - `fill`: the image will takes up 100% of the available inline size.
     * - `auto`: the image will be displayed at its natural size.
     *
     * **Mobile surfaces:** Always wrap your image in a box with a set width and height.
     * ScrollViews on mobile have a dynamic height, which can cause images to appear
     * inconsistently without defined dimensions.
     *
     * @default 'fill'
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#width
     */
    inlineSize?: ImageProps['inlineSize'];
    /**
     * The image source, which should be a remote URL.
     *
     * When the image is loading or no `src` is provided, a placeholder will be rendered.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#src
     */
    src?: ImageProps['src'];
    /**
     * Border radius for the image corners.
     *
     * [1-to-4-value syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#edges_of_a_box) is
     * supported. Note that, contrary to CSS, it uses flow-relative values and the order is:
     *
     * - 4 values: `start-start inline-end end-end inline-start`
     * - 3 values: `start-start inline end-end`
     * - 2 values: `block inline`
     *
     * For example:
     * - `base` means all corners have `base` radius
     * - `base none` means start-start and end-end corners are `base`, inline-end and inline-start corners are `none`
     * - `base none large` means start-start is `base`, inline-end and inline-start are `none`, end-end is `large`
     * - `base none large small` means start-start is `base`, inline-end is `none`, end-end is `large`, inline-start is `small`
     *
     * Supports size keywords from the design system scale:
     * - Size scale: `small-500`, `small-400`, `small-300`, `small-200`, `small-100`, `small`, `base`, `large`, `large-100`, `large-200`, `large-300`, `large-400`, `large-500`
     * - Special values: `max` (full pill shape), `none` (no border radius)
     *
     * @default 'none'
     */
    borderRadius?: MaybeAllValuesShorthandProperty<BorderRadiusKeyword>;
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: HtmlElementTagNameProps<ImageJSXProps>;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName]: IntrinsicElementProps<ImageJSXProps>;
        }
    }
}

export { tagName };
export type { ImageJSXProps };
