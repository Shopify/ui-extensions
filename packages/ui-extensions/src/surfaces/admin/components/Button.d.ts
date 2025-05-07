/** VERSION: 0.51.1 **/
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
import type {IconProps$1, ButtonProps$1,IconType,InteractionProps,ComponentChild} from './shared.d.ts';

export interface IconProps extends Pick<IconProps$1, 'type' | 'tone' | 'color' | 'size'> {
    /**
     * Specifies the type of icon that will be displayed.
     */
    type: '' | IconType | 'empty';
    tone: Extract<IconProps$1['tone'], 'auto' | 'neutral' | 'info' | 'success' | 'caution' | 'warning' | 'critical'>;
    color: Extract<IconProps$1['color'], 'base' | 'subdued'>;
    size: Extract<IconProps$1['size'], 'small' | 'base'>;
}

export type ButtonOnlyProps = Extract<ButtonProps$1, {
    type?: unknown;
}>;
export type ButtonBaseProps = Required<Pick<ButtonOnlyProps, 'accessibilityLabel' | 'disabled' | 'command' | 'commandFor' | 'lang' | 'loading' | 'type' | 'tone' | 'variant' | 'target' | 'href' | 'download'>>;
export interface ButtonProps extends ButtonBaseProps {
    tone: Extract<ButtonProps$1['tone'], 'neutral' | 'critical' | 'auto'>;
    icon: IconProps['type'];
}

export type CallbackEvent<TTagName extends keyof HTMLElementTagNameMap, TEvent extends Event = Event> = TEvent & {
    currentTarget: HTMLElementTagNameMap[TTagName];
};
export type CallbackEventListener<TTagName extends keyof HTMLElementTagNameMap, TEvent extends Event = Event> = (EventListener & {
    (event: CallbackEvent<TTagName, TEvent>): void;
}) | null;

export type Styles = string;
export type RenderImpl = Omit<ShadowRootInit, 'mode'> & {
    ShadowRoot: (element: any) => ComponentChild;
    styles?: Styles;
};
export interface ActivationEventEsque {
    shiftKey: boolean;
    metaKey: boolean;
    ctrlKey: boolean;
    button: number;
}
export interface ClickOptions {
    /**
     * The event you want to influence the synthetic click.
     */
    sourceEvent?: ActivationEventEsque;
}
/**
 * Base class for creating custom elements with Preact.
 * While this class could be used in both Node and the browser, the constructor will only be used in the browser.
 * So we give it a type of HTMLElement to avoid typing issues later where it's used, which will only happen in the browser.
 */
declare const BaseClass: typeof globalThis.HTMLElement;
declare abstract class PreactCustomElement extends BaseClass {
        /** @private */
    static get observedAttributes(): string[];
    constructor({ styles, ShadowRoot: renderFunction, delegatesFocus, ...options }: RenderImpl);
    /** @private */
    setAttribute(name: string, value: string): void;
    /** @private */
    attributeChangedCallback(name: string): void;
    /** @private */
    connectedCallback(): void;
    /** @private */
    disconnectedCallback(): void;
    /** @private */
    adoptedCallback(): void;
    /**
     * Queue a run of the render function.
     * You shouldn't need to call this manually - it should be handled by changes to @property values.
     * @private
     */
    queueRender(): void;
    /**
     * Like the standard `element.click()`, but you can influence the behavior with a `sourceEvent`.
     *
     * For example, if the `sourceEvent` was a middle click, or has particular keys held down,
     * components will attempt to produce the desired behavior on links, such as opening the page in the background tab.
     * @private
     * @param options
     */
    click({ sourceEvent }?: ClickOptions): void;
}

export interface PreactOverlayControlProps extends Required<Pick<InteractionProps, 'commandFor'>> {
    command: Extract<InteractionProps['command'], '--show' | '--hide' | '--toggle' | '--auto'>;
}

declare const Button_base: (abstract new (args_0: RenderImpl) => PreactCustomElement & PreactOverlayControlProps) & Pick<typeof PreactCustomElement, "prototype" | "observedAttributes">;
declare class Button extends Button_base implements ButtonProps {
    accessor disabled: ButtonProps['disabled'];
    accessor icon: ButtonProps['icon'];
    accessor loading: ButtonProps['loading'];
    accessor variant: ButtonProps['variant'];
    accessor tone: ButtonProps['tone'];
    accessor target: ButtonProps['target'];
    accessor href: ButtonProps['href'];
    accessor download: ButtonProps['download'];
    accessor onclick: CallbackEventListener<typeof tagName> | null;
    accessor onblur: CallbackEventListener<typeof tagName> | null;
    accessor onfocus: CallbackEventListener<typeof tagName> | null;
    accessor type: ButtonProps['type'];
    accessor accessibilityLabel: ButtonProps['accessibilityLabel'];
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: Button;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName]: Omit<HTMLAttributes<HTMLElement>, Extract<keyof HTMLAttributes<HTMLElement>, `on${Capitalize<string>}`>> & ButtonJSXProps;
        }
    }
}

declare const tagName = "s-button";
export interface ButtonJSXProps extends Partial<ButtonProps>, Pick<ButtonProps$1, 'id'> {
    onClick?: ((event: CallbackEvent<typeof tagName>) => void) | null;
    onFocus?: ((event: CallbackEvent<typeof tagName>) => void) | null;
    onBlur?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}

export { Button };
export type { ButtonJSXProps };
