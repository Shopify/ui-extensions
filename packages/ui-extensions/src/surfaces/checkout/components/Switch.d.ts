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
import type {SwitchProps$1} from './components-shared.d.ts';

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
export type CallbackEventListener<TTagName extends keyof HTMLElementTagNameMap, TData = object> = (EventListener & {
    (event: CallbackEvent<TTagName, Event> & TData): void;
}) | null;

declare const tagName = "s-switch";
export interface SwitchElementProps extends Pick<SwitchProps$1, 'accessibilityLabel' | 'checked' | 'command' | 'commandFor' | 'defaultChecked' | 'disabled' | 'id' | 'label' | 'name' | 'value'> {
    command?: Extract<SwitchProps$1['command'], '--auto' | '--show' | '--hide' | '--toggle'>;
}
export interface SwitchEvents extends Pick<SwitchProps$1, 'onChange'> {
}
export interface SwitchElementEvents {
    /**
     * A callback that is run whenever the control is changed.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
     */
    change?: CallbackEventListener<typeof tagName>;
}
export interface SwitchElement extends SwitchElementProps, Omit<HTMLElement, 'id' | 'onchange'> {
    onchange: SwitchEvents['onChange'];
}
export interface SwitchProps extends SwitchElementProps, SwitchEvents {
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: SwitchElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName]: SwitchProps & BaseElementProps<SwitchElement>;
        }
    }
}

export type { SwitchElement, SwitchElementEvents, SwitchElementProps, SwitchEvents, SwitchProps };
