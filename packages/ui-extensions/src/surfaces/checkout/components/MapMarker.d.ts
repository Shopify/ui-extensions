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

declare const tagName = "s-map-marker";
export interface MapMarkerElementProps extends Pick<MapMarkerProps$1, 'accessibilityLabel' | 'blockSize' | 'command' | 'commandFor' | 'clusterable' | 'inlineSize' | 'latitude' | 'longitude'> {
    command?: Extract<MapMarkerProps$1['command'], '--auto' | '--show' | '--hide' | '--toggle'>;
}
export interface MapMarkerEvents extends Pick<MapMarkerProps$1, 'onClick'> {
}
export interface MapMarkerElementEvents {
    /**
     * Callback when a marker is clicked.
     *
     * It does not trigger a click event on the map itself.
     */
    click?: CallbackEventListener<typeof tagName>;
}
export interface MapMarkerElementSlots {
    /**
     * The graphic to use as the marker.
     *
     * If unset, it will default to the provider’s default marker.
     */
    graphic?: HTMLElement;
}
export interface MapMarkerElement extends MapMarkerElementProps, Omit<HTMLElement, 'id' | 'onclick'> {
    onclick: MapMarkerEvents['onClick'];
}
export interface MapMarkerProps extends MapMarkerElementProps, MapMarkerEvents {
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: MapMarkerElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName]: MapMarkerProps & BaseElementPropsWithChildren<MapMarkerElement>;
        }
    }
}

export type { MapMarkerElement, MapMarkerElementEvents, MapMarkerElementProps, MapMarkerElementSlots, MapMarkerEvents, MapMarkerProps };
