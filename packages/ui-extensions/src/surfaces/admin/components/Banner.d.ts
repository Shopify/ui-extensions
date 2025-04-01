/** VERSION: 0.45.0 **/
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
import type {ComponentChild,BannerProps$1} from './shared.d.ts';

export type RequiredBannerProps = Required<BannerProps$1>;
export interface BannerProps extends Pick<RequiredBannerProps, 'heading' | 'dismissible' | 'hidden'> {
    tone: Extract<RequiredBannerProps['tone'], 'auto' | 'critical' | 'warning' | 'success' | 'info'>;
}

export type CallbackEvent<T extends keyof HTMLElementTagNameMap> = Event & {
    target: HTMLElementTagNameMap[T];
};
export type CallbackEventListener<T extends keyof HTMLElementTagNameMap> = (EventListener & {
    (event: CallbackEvent<T>): void;
}) | null;

declare const tagName = "s-banner";
export interface ReactProps extends Partial<BannerProps>, Pick<BannerProps$1, 'id'> {
    secondaryActions?: ComponentChild;
    onDismiss?: ((event: CallbackEvent<typeof tagName>) => void) | null;
    onAfterHide?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}

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

declare class Banner extends PreactCustomElement implements BannerProps {
    accessor heading: BannerProps['heading'];
    accessor tone: BannerProps['tone'];
    accessor hidden: BannerProps['hidden'];
    accessor dismissible: BannerProps['dismissible'];
    accessor ondismiss: CallbackEventListener<typeof tagName> | null;
    accessor onafterhide: CallbackEventListener<typeof tagName> | null;
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: Banner;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName]: HTMLAttributes<HTMLElement> & ReactProps;
        }
    }
}

export { Banner };
