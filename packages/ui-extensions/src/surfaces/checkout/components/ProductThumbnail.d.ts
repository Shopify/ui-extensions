/** VERSION: 0.0.0 **/
/* eslint-disable import-x/extensions */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable line-comment-position */
/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable no-var */
/* eslint-disable import-x/namespace */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {ProductThumbnailProps$1} from './components-shared.d.ts';

/**
 * Used when an element does not have children.
 */
export interface BaseElementProps<TClass = HTMLElement> {
    key?: preact.Key;
    ref?: preact.Ref<TClass>;
    slot?: Lowercase<string>;
}

declare const tagName = "s-product-thumbnail";
export interface ProductThumbnailElementProps extends Pick<ProductThumbnailProps$1, 'alt' | 'size' | 'sizes' | 'src' | 'srcSet' | 'totalItems'> {
    size?: Extract<ProductThumbnailProps$1['size'], 'small-100' | 'small' | 'base'>;
}
export interface ProductThumbnailElement extends ProductThumbnailElementProps, Omit<HTMLElement, 'id'> {
}
export interface ProductThumbnailProps extends ProductThumbnailElementProps {
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: ProductThumbnailElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName]: ProductThumbnailProps & BaseElementProps<ProductThumbnailElement>;
        }
    }
}

export type { ProductThumbnailElement, ProductThumbnailElementProps, ProductThumbnailProps };
