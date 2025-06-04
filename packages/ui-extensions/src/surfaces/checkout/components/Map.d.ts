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
import type {MapProps$1} from './components-shared.d.ts';

/**
 * Used when an element does not have children.
 */
export interface BaseElementProps<TClass = HTMLElement> {
    key?: preact.Key;
    ref?: preact.Ref<TClass>;
    slot?: Lowercase<string>;
}
/**
 * Used when an element has children.
 */
export interface BaseElementPropsWithChildren<TClass = HTMLElement> extends BaseElementProps<TClass> {
    children?: preact.ComponentChildren;
}

export interface MapProps extends Pick<MapProps$1, 'accessibilityLabel' | 'apiKey' | 'blockSize' | 'id' | 'inlineSize' | 'latitude' | 'longitude' | 'maxBlockSize' | 'maxInlineSize' | 'maxZoom' | 'minBlockSize' | 'minInlineSize' | 'minZoom' | 'onBoundsChange' | 'onClick' | 'onDblClick' | 'onViewChange' | 'zoom'> {
}
export interface MapElement extends MapProps, Omit<HTMLElement, 'id'> {
}
declare global {
    interface HTMLElementTagNameMap {
        's-map': MapElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            's-map': MapProps & BaseElementPropsWithChildren<MapElement>;
        }
    }
}

export type { MapElement, MapProps };
