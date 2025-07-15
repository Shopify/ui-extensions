
/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable line-comment-position */
/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable no-var */
/* eslint-disable import/no-deprecated */
/* eslint-disable import/namespace */
/* eslint-disable import/no-deprecated */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {ButtonProps$1} from './components-shared.d.ts';

declare global {
    namespace preact {
        interface Key {
        }
        interface Ref<T> {
            current: T;
        }
        interface ComponentChildren {
        }
    }
}
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

export interface ButtonProps extends Pick<ButtonProps$1, 'accessibilityLabel' | 'disabled' | 'loading' | 'onClick' | 'variant' | 'tone' | 'id'> {
}

declare const tagName = "s-button";
export interface ReactProps extends ButtonProps {
    id?: string;
    onClick?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}
export type CallbackEvent<TTagName extends keyof HTMLElementTagNameMap, TEvent extends Event = Event> = TEvent & {
    currentTarget: HTMLElementTagNameMap[TTagName];
};

declare class Button implements ReactProps {
}
declare global {
    interface HTMLElementTagNameMap {
        's-button': Button;
    }
    namespace preact {
        namespace createElement {
            namespace JSX {
                interface IntrinsicElements {
                    's-button': ButtonProps & BaseElementPropsWithChildren<Button>;
                }
            }
        }
    }
}

export { Button };
export type { ButtonProps, ReactProps };
