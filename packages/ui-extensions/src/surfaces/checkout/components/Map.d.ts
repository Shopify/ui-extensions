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
export type CallbackEvent<TTagName extends keyof HTMLElementTagNameMap, TEvent extends Event = Event> = TEvent & {
    currentTarget: HTMLElementTagNameMap[TTagName];
};
export type CallbackEventListener<TTagName extends keyof HTMLElementTagNameMap, TData = object> = (EventListener & {
    (event: CallbackEvent<TTagName, Event> & TData): void;
}) | null;

declare const tagName = "s-map";
export interface MapElementProps extends Pick<MapProps$1, 'accessibilityLabel' | 'apiKey' | 'blockSize' | 'id' | 'inlineSize' | 'latitude' | 'longitude' | 'maxBlockSize' | 'maxInlineSize' | 'maxZoom' | 'minBlockSize' | 'minInlineSize' | 'minZoom' | 'zoom'> {
}
export interface MapEvents extends Pick<MapProps$1, 'onBoundsChange' | 'onClick' | 'onDblClick' | 'onViewChange'> {
}
export interface MapLocation {
    latitude?: number;
    longitude?: number;
}
export interface MapLocationEvent {
    location?: MapLocation;
}
export interface MapBoundsEvent {
    bounds?: {
        northEast?: MapLocation;
        southWest?: MapLocation;
    };
}
export interface MapViewChangeEvent extends MapLocationEvent {
    zoom?: number;
}
export interface MapElementEvents {
    /**
     * Callback when the viewport bounds have changed or the map is resized.
     */
    boundschange?: CallbackEventListener<typeof tagName, MapBoundsEvent>;
    /**
     * Callback when the user clicks on the map.
     */
    click?: CallbackEventListener<typeof tagName, MapLocationEvent>;
    /**
     * Callback when the user double-clicks on the map.
     */
    dblclick?: CallbackEventListener<typeof tagName, MapLocationEvent>;
    /**
     * Callback when the map view changes.
     */
    viewchange?: CallbackEventListener<typeof tagName, MapViewChangeEvent>;
}
export interface MapElement extends MapElementProps, Omit<HTMLElement, 'id' | 'onclick' | 'ondblclick'> {
    onboundschange: MapEvents['onBoundsChange'];
    onclick: MapEvents['onClick'];
    ondblclick: MapEvents['onDblClick'];
    onviewchange: MapEvents['onViewChange'];
}
export interface MapProps extends MapElementProps, MapEvents {
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: MapElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName]: MapProps & BaseElementPropsWithChildren<MapElement>;
        }
    }
}

export type { MapBoundsEvent, MapElement, MapElementEvents, MapElementProps, MapEvents, MapLocation, MapLocationEvent, MapProps, MapViewChangeEvent };
