/** VERSION: 1.25.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  FunctionSettingsProps$1,
  ExtendableEvent,
  ComponentChildren,
} from './shared.d.ts';

export type CallbackEvent<T extends keyof HTMLElementTagNameMap> = Event & {
  currentTarget: HTMLElementTagNameMap[T];
};
export type CallbackEventListener<T extends keyof HTMLElementTagNameMap> =
  | (EventListener & {
      (event: CallbackEvent<T>): void;
    })
  | null;
export type CallbackErrorEventListener<
  TTagName extends keyof HTMLElementTagNameMap,
  TError extends Error = Error,
> =
  | (EventListener & {
      (
        event: CallbackEvent<TTagName> & {
          error: TError;
        },
      ): void;
    })
  | null;
export interface CallbackExtendableEvent<
  TTagName extends keyof HTMLElementTagNameMap,
> extends CallbackEvent<TTagName>,
    Pick<ExtendableEvent, 'waitUntil'> {}
export type CallbackExtendableEventListener<
  TTagName extends keyof HTMLElementTagNameMap,
> =
  | (EventListener & {
      (event: CallbackExtendableEvent<TTagName>): void;
    })
  | null;

export interface FunctionSettingsProps
  extends Pick<FunctionSettingsProps$1, 'id'> {}

declare const tagName = 's-function-settings';
export interface FunctionSettingsJSXProps
  extends Partial<
    FunctionSettingsProps & Pick<FunctionSettingsProps$1, 'onError'>
  > {
  /**
   * An optional callback function that will be run by the admin when the user
   * commits their changes in the admin-rendered part of the function settings
   * experience. If `event.waitUntil` is called with a promise, the admin will wait for the
   * promise to resolve before committing any changes to Shopify’s servers. If
   * the promise rejects, the admin will abort the changes and display an error,
   * using the `message` property of the error you reject with.
   */
  onSubmit?: ((event: CallbackExtendableEvent<typeof tagName>) => void) | null;
  /**
   * A callback that is run when the function settings form is reset.
   */
  onReset?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}

export type Styles = string;
export type RenderImpl = Omit<ShadowRootInit, 'mode'> & {
  ShadowRoot: (element: any) => ComponentChildren;
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
  constructor({
    styles,
    ShadowRoot: renderFunction,
    delegatesFocus,
    ...options
  }: RenderImpl);

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
  click({sourceEvent}?: ClickOptions): void;
}

export type FunctionSettingsErrorEvent = Parameters<
  NonNullable<FunctionSettingsProps$1['onError']>
>[0];
declare class FunctionSettings
  extends PreactCustomElement
  implements FunctionSettingsProps
{
  constructor();
  /**
   * An optional callback function that will be run by the admin when the user
   * commits their changes in the admin-rendered part of the function settings
   * experience. If `event.waitUntil` is called with a promise, the admin will wait for the
   * promise to resolve before committing any changes to Shopify’s servers. If
   * the promise rejects, the admin will abort the changes and display an error,
   * using the `message` property of the error you reject with.
   */
  accessor onsubmit: CallbackExtendableEventListener<typeof tagName> | null;
  /**
   * An optional callback function that will be run by the admin when
   * committing the changes to Shopify’s servers fails. The error event you receive includes
   * an `error` property that is an `AggregateError` object. This object includes
   * an array of errors that were caused by data your extension provided.
   * Network errors and user errors that are out of your control will not be reported here.
   *
   * In the `onError` callback, you should update your extension’s UI to
   * highlight the fields that caused the errors, and display the error messages
   * to the user.
   */
  accessor onerror: CallbackErrorEventListener<
    typeof tagName,
    FunctionSettingsErrorEvent['error']['errors'][0]
  > | null;

  /**
   * A callback that is run when the function settings form is reset.
   */
  accessor onreset: CallbackEventListener<typeof tagName> | null;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: FunctionSettings;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: FunctionSettingsJSXProps & {
        children?: preact.ComponentChildren;
      };
    }
  }
}

export {FunctionSettings};
export type {FunctionSettingsJSXProps};
