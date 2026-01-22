/** VERSION: 1.38.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  DatePickerProps$1,
  PreactCustomElement,
  RenderImpl,
} from './shared.d.ts';

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
  type: Extract<DatePickerProps$1['type'], 'single' | 'range'>;
}

export type CallbackEvent<T extends keyof HTMLElementTagNameMap> = Event & {
  currentTarget: HTMLElementTagNameMap[T];
};
export type CallbackEventListener<T extends keyof HTMLElementTagNameMap> =
  | (EventListener & {
      (event: CallbackEvent<T>): void;
    })
  | null;
/** Used when an element does not have children. */
export interface PreactBaseElementProps<TClass extends HTMLElement> {
  /** Assigns a unique key to this element. */
  key?: preact.Key;
  /** Assigns a ref (generally from `useRef()`) to this element. */
  ref?: preact.Ref<TClass>;
  /** Assigns this element to a parent's slot. */
  slot?: Lowercase<string>;
}

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
}

declare const internals: unique symbol;
declare const dirtyStateSymbol: unique symbol;
declare class BaseClass extends PolarisCustomElement {
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
  accessor onviewchange: CallbackEventListener<typeof tagName> | null;
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
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: DatePickerJSXProps & PreactBaseElementProps<DatePicker>;
    }
  }
}

declare const tagName = 's-date-picker';
export interface DatePickerJSXProps
  extends Partial<DatePickerProps>,
    Pick<DatePickerProps$1, 'id'> {
  onViewChange?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  onFocus?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  onBlur?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  onInput?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  onChange?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}

export {DatePicker};
export type {DatePickerJSXProps};
