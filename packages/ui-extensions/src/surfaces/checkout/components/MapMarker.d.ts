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
import { ReactNode } from 'react';

/**
 * Used when an element does not have children.
 */
export interface BaseElementProps<TClass = HTMLElement> {
    key?: preact.Key;
    ref?: preact.Ref<TClass>;
    slot?: Lowercase<string>;
}
export type CallbackEvent<TTagName extends keyof HTMLElementTagNameMap, TEvent extends Event = Event> = TEvent & {
    currentTarget: HTMLElementTagNameMap[TTagName];
};

declare const tagName = "s-map-marker";
export interface MapMarkerBaseProps extends Pick<MapMarkerProps$1, 'accessibilityLabel' | 'blockSize' | 'clusterable' | 'inlineSize' | 'latitude' | 'longitude'> {
}
export interface MapMarkerEvents extends Pick<MapMarkerProps$1, 'onClick'> {
}
export interface MapMarkerElementEvents {
    /**
     * Callback when a marker is clicked.
     *
     * It does not trigger a click event on the map itself.
     */
    click?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}
export interface MapMarkerSlots {
    /**
     * The graphic to use as the marker.
     *
     * If unset, it will default to the provider’s default marker.
     */
    graphic?: ReactNode;
}
export interface MapMarkerElementSlots {
    /**
     * The graphic to use as the marker.
     *
     * If unset, it will default to the provider’s default marker.
     */
    graphic?: HTMLElement;
}
export interface MapMarkerElement extends MapMarkerBaseProps, MapMarkerSlots, Omit<HTMLElement, 'id' | 'onclick'> {
    onclick: MapMarkerEvents['onClick'];
}
export interface MapMarkerProps extends MapMarkerBaseProps, MapMarkerEvents {
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: MapMarkerElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName]: MapMarkerProps & BaseElementProps<MapMarkerElement>;
        }
    }
}

export type { MapMarkerBaseProps, MapMarkerElement, MapMarkerElementEvents, MapMarkerElementSlots, MapMarkerEvents, MapMarkerProps, MapMarkerSlots };
