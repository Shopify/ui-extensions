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
export type CallbackEventListener<TTagName extends keyof HTMLElementTagNameMap, TEvent extends Event = Event> = (EventListener & {
    (event: CallbackEvent<TTagName, TEvent>): void;
}) | null;

declare const tagName = "s-map";
export interface MapElementProps extends Pick<MapProps$1, 'accessibilityLabel' | 'apiKey' | 'blockSize' | 'id' | 'inlineSize' | 'latitude' | 'longitude' | 'maxBlockSize' | 'maxInlineSize' | 'maxZoom' | 'minBlockSize' | 'minInlineSize' | 'minZoom' | 'zoom'> {
}
export interface MapEvents extends Pick<MapProps$1, 'onBoundsChange' | 'onClick' | 'onDblClick' | 'onViewChange'> {
}
export interface MapElementEvents {
    /**
     * Callback when the viewport bounds have changed or the map is resized.
     */
    boundschange?: ((event: CallbackEventListener<typeof tagName>) => void) | null;
    /**
     * Callback when the user clicks on the map.
     */
    click?: ((event: CallbackEventListener<typeof tagName>) => void) | null;
    /**
     * Callback when the user double-clicks on the map.
     */
    dblclick?: ((event: CallbackEventListener<typeof tagName>) => void) | null;
    /**
     * Callback when the map view changes.
     */
    viewchange?: ((event: CallbackEventListener<typeof tagName>) => void) | null;
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

export type { MapElement, MapElementEvents, MapElementProps, MapEvents, MapProps };
