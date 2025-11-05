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
import type {ConsentCheckboxProps$1,CheckboxProps$1} from './components-shared.d.ts';

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

declare const tagName$1 = "s-checkbox";
export interface CheckboxElementProps extends Pick<CheckboxProps$1, 'accessibilityLabel' | 'checked' | 'command' | 'commandFor' | 'defaultChecked' | 'disabled' | 'error' | 'id' | 'label' | 'name' | 'required' | 'value'> {
    command?: Extract<CheckboxProps$1['command'], '--auto' | '--show' | '--hide' | '--toggle'>;
}
export interface CheckboxEvents extends Pick<CheckboxProps$1, 'onChange'> {
}
export interface CheckboxElement extends CheckboxElementProps, Omit<HTMLElement, 'id' | 'onchange'> {
    onchange: CheckboxEvents['onChange'];
}
export interface CheckboxProps extends CheckboxElementProps, CheckboxEvents {
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$1]: CheckboxElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$1]: CheckboxProps & BaseElementProps<CheckboxElement>;
        }
    }
}

declare const tagName = "s-consent-checkbox";
export interface ConsentCheckboxElementProps extends Pick<ConsentCheckboxProps$1, 'accessibilityLabel' | 'checked' | 'command' | 'commandFor' | 'defaultChecked' | 'disabled' | 'error' | 'id' | 'label' | 'name' | 'policy' | 'value'> {
    command?: Extract<ConsentCheckboxProps$1['command'], '--auto' | '--show' | '--hide' | '--toggle'>;
}
export interface ConsentCheckboxEvents extends Pick<CheckboxEvents, 'onChange'> {
}
export interface ConsentCheckboxElementEvents {
    /**
     * A callback that is run whenever the control is changed.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
     */
    change?: CallbackEventListener<typeof tagName>;
}
export interface ConsentCheckboxElement extends ConsentCheckboxElementProps, Omit<HTMLElement, 'id' | 'onchange'> {
    onchange: ConsentCheckboxEvents['onChange'];
}
export interface ConsentCheckboxProps extends ConsentCheckboxElementProps, ConsentCheckboxEvents {
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: ConsentCheckboxElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName]: ConsentCheckboxProps & BaseElementProps<ConsentCheckboxElement>;
        }
    }
}

export type { ConsentCheckboxElement, ConsentCheckboxElementEvents, ConsentCheckboxElementProps, ConsentCheckboxEvents, ConsentCheckboxProps };
