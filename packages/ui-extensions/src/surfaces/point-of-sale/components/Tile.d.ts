/** VERSION: 1.0.0 **/

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />

export interface TileProps {
  /**
   * The text set on the main label of the tile.
   */
  title: string;
  /**
   * The text set on the secondary label of the tile.
   */
  subtitle?: string;
  /**
   * Sets whether or not the tile can be tapped.
   * @default true
   */
  enabled?: boolean;
  /**
   * Sets whether or not the tile is in a red destructive appearance.
   * @default false
   */
  destructive?: boolean;
  /**
   * The number value displayed in the top right corner of the tile.
   */
  badgeValue?: number;
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
export type ComponentChild = preact.ComponentChild;
export type RenderImpl = Omit<ShadowRootInit, 'mode'> & {
  ShadowRoot: (element: any) => ComponentChild;
  styles?: Styles;
};

/** Used when an element does not have children. */
export interface PreactBaseElementProps<TClass extends HTMLElement> {
  /** Assigns a unique key to this element. */
  key?: preact.Key;
  /** Assigns a ref (generally from `useRef()`) to this element. */
  ref?: preact.Ref<TClass>;
  /** Assigns this element to a parent's slot. */
  slot?: Lowercase<string>;
}
/** Used when an element has children. */
export interface PreactBaseElementPropsWithChildren<TClass extends HTMLElement>
  extends PreactBaseElementProps<TClass> {
  children?: preact.ComponentChildren;
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
}

declare class Tile extends PreactCustomElement implements TileProps {
  accessor title: TileProps['title'];
  accessor subtitle: TileProps['subtitle'];
  accessor enabled: TileProps['enabled'];
  accessor destructive: TileProps['destructive'];
  accessor badgeValue: TileProps['badgeValue'];
  accessor onclick: CallbackEventListener<typeof tagName> | null;
  accessor onpress: CallbackEventListener<typeof tagName> | null;
  constructor();
}

declare global {
  interface HTMLElementTagNameMap {
    [tagName]: Tile;
  }
}

declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: TileJSXProps & PreactBaseElementPropsWithChildren<Tile>;
    }
  }
}

declare const tagName = 'pos-tile';
export interface TileJSXProps extends Partial<TileProps> {
  /**
   * The callback that is executed when the tile is tapped.
   */
  onClick?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /**
   * Alias for `onClick`
   * The callback that is executed when the tile is tapped.
   */
  onPress?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}

export {Tile};
export type {TileJSXProps};
