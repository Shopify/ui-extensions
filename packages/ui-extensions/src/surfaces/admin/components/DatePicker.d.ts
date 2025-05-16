/** VERSION: 1.0.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {DatePickerProps$1, ComponentChild} from './shared.d.ts';

export interface DatePickerProps
  extends Required<
    Pick<
      DatePickerProps$1,
      | 'defaultView'
      | 'view'
      | 'allow'
      | 'disallow'
      | 'allowDays'
      | 'disallowDays'
      | 'value'
      | 'defaultValue'
      | 'name'
    >
  > {
  type: Extract<DatePickerProps$1['type'], 'single' | 'multiple' | 'range'>;
}

export type CallbackEvent<
  TTagName extends keyof HTMLElementTagNameMap,
  TEvent extends Event = Event,
> = TEvent & {
  currentTarget: HTMLElementTagNameMap[TTagName];
};
export type CallbackEventListener<
  TTagName extends keyof HTMLElementTagNameMap,
  TEvent extends Event = Event,
> =
  | (EventListener & {
      (event: CallbackEvent<TTagName, TEvent>): void;
    })
  | null;

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
declare const BaseClass$1: typeof globalThis.HTMLElement;
declare abstract class PreactCustomElement extends BaseClass$1 {
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

declare class ViewChangeEvent extends Event {
  /** The new month to display in `YYYY-MM` format. */
  view: string;
  constructor(view: string);
}

declare const internals: unique symbol;
declare const dirtyStateSymbol: unique symbol;
declare class BaseClass extends PreactCustomElement {
  static formAssociated: boolean;
  constructor(renderImpl: RenderImpl);
  /** @private */
  [internals]: ElementInternals;
}
declare class DatePicker extends BaseClass implements DatePickerProps {
  accessor defaultView: string;
  set view(view: string);
  get view(): string;
  accessor allow: DatePickerProps['allow'];
  accessor disallow: DatePickerProps['disallow'];
  accessor allowDays: DatePickerProps['allowDays'];
  accessor disallowDays: DatePickerProps['disallowDays'];
  accessor type: DatePickerProps['type'];
  accessor defaultValue: DatePickerProps['defaultValue'];
  accessor name: DatePickerProps['name'];
  set value(value: string);
  get value(): string;
  /** @private */
  [dirtyStateSymbol]: boolean;
  /** @private */
  formResetCallback(): void;
  accessor onviewchange: CallbackEventListener<
    typeof tagName,
    HTMLElementEventMap['viewchange']
  > | null;

  accessor onfocus: CallbackEventListener<typeof tagName> | null;
  accessor onblur: CallbackEventListener<typeof tagName> | null;
  accessor oninput: CallbackEventListener<typeof tagName> | null;
  accessor onchange: CallbackEventListener<typeof tagName> | null;
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: DatePicker;
  }
  interface HTMLElementEventMap {
    viewchange: ViewChangeEvent;
  }
}
declare module 'preact' {
  interface BaseProps {
    slot?: Lowercase<string>;
  }
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: DatePickerJSXProps & BaseProps;
    }
  }
}

declare const tagName = 's-date-picker';
export interface DatePickerJSXProps
  extends Partial<DatePickerProps>,
    Pick<DatePickerProps$1, 'id'> {
  onViewChange?:
    | ((
        event: CallbackEvent<typeof tagName, HTMLElementEventMap['viewchange']>,
      ) => void)
    | null;
  onFocus?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  onBlur?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  onInput?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  onChange?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}

export {DatePicker};
export type {DatePickerJSXProps};
