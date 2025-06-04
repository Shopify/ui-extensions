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
import type {MapMarkerProps$1} from './components-shared.d.ts';

/**
 * Used when an element does not have children.
 */
export interface BaseElementProps<TClass = HTMLElement> {
    key?: preact.Key;
    ref?: preact.Ref<TClass>;
    slot?: Lowercase<string>;
}

export interface MapMarkerProps extends Pick<MapMarkerProps$1, 'accessibilityLabel' | 'blockSize' | 'clusterable' | 'graphic' | 'inlineSize' | 'latitude' | 'longitude' | 'onClick'> {
}
export interface MapMarkerElement extends MapMarkerProps, Omit<HTMLElement, 'id'> {
}
declare global {
    interface HTMLElementTagNameMap {
        's-map-marker': MapMarkerElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            's-map-marker': MapMarkerProps & BaseElementProps<MapMarkerElement>;
        }
    }
}

export type { MapMarkerElement, MapMarkerProps };
