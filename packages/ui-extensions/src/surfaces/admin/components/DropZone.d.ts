/** VERSION: 1.16.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {DropZoneProps$1, ComponentChild} from './shared.d.ts';

export type CallbackEvent<T extends keyof HTMLElementTagNameMap> = Event & {
  currentTarget: HTMLElementTagNameMap[T];
};
export type CallbackEventListener<T extends keyof HTMLElementTagNameMap> =
  | (EventListener & {
      (event: CallbackEvent<T>): void;
    })
  | null;

export interface DropZoneProps
  extends Required<
    Pick<
      DropZoneProps$1,
      | 'accept'
      | 'accessibilityLabel'
      | 'disabled'
      | 'files'
      | 'name'
      | 'error'
      | 'label'
      | 'labelAccessibilityVisibility'
      | 'multiple'
      | 'required'
      | 'value'
    >
  > {}

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

declare const setFiles: unique symbol;

declare const internals: unique symbol;
declare const getFileInput: unique symbol;
declare class BaseClass extends PreactCustomElement {
  static formAssociated: boolean;
  constructor(renderImpl: RenderImpl);
  /** @private */
  [internals]: ElementInternals;
}
declare class DropZone extends BaseClass implements DropZoneProps {
  accessor accept: DropZoneProps['accept'];
  accessor accessibilityLabel: DropZoneProps['accessibilityLabel'];
  accessor disabled: DropZoneProps['disabled'];
  accessor error: DropZoneProps['error'];
  accessor label: DropZoneProps['label'];
  accessor labelAccessibilityVisibility: DropZoneProps['labelAccessibilityVisibility'];
  accessor multiple: DropZoneProps['multiple'];
  accessor name: DropZoneProps['name'];
  accessor required: DropZoneProps['required'];
  accessor onchange: CallbackEventListener<typeof tagName>;
  accessor oninput: CallbackEventListener<typeof tagName>;
  accessor ondroprejected: CallbackEventListener<typeof tagName>;
  get value(): string;
  set value(value: string);
  get files(): File[];
  set files(files: File[]);
  /** @private */
  [setFiles](files: File[]): void;
  /** @private */
  [getFileInput](): HTMLInputElement | null;
  /** @private */
  formResetCallback(): void;
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: DropZone;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: Omit<
        HTMLAttributes<HTMLElement>,
        Extract<keyof HTMLAttributes<HTMLElement>, `on${Capitalize<string>}`>
      > &
        DropZoneJSXProps;
    }
  }
}

declare const tagName = 's-drop-zone';
export interface DropZoneJSXProps
  extends Partial<DropZoneProps>,
    Pick<DropZoneProps$1, 'id'> {
  onChange?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  onInput?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  onDropRejected?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}

export {DropZone};
export type {DropZoneJSXProps};
