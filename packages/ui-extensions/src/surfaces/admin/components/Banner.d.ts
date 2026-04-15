/** VERSION: 1.64.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  ComponentChildren,
  BannerProps$1,
  PreactCustomElement,
  RenderImpl,
} from './shared.d.ts';

/**
 * An event object with a strongly-typed `currentTarget` property that references the specific HTML element that triggered the event.
 *
 * This type extends the standard DOM `Event` interface and ensures type safety when accessing the element that fired the event.
 */
export type CallbackEvent<T extends keyof HTMLElementTagNameMap> = Event & {
  currentTarget: HTMLElementTagNameMap[T];
};
/**
 * A function that handles events from UI components.
 *
 * This type represents an event listener callback that receives a `CallbackEvent` with a strongly-typed `currentTarget`.
 * Use this for component event handlers like `click`, `focus`, `blur`, and other DOM events.
 *
 * @example
 * const handleClick: CallbackEventListener<'button'> = (event) => {
 *   console.log('Button clicked:', event.currentTarget);
 * };
 */
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
/** Used when an element has children. */
export interface PreactBaseElementPropsWithChildren<TClass extends HTMLElement>
  extends PreactBaseElementProps<TClass> {
  children?: preact.ComponentChildren;
}

/**
 * All properties for the banner component marked as required.
 * @publicDocs
 */
export type RequiredBannerProps = Required<BannerProps$1>;
/**
 * The properties for the banner component. These properties define an important message or notification with visual styling that conveys its semantic meaning.
 * @publicDocs
 */
export interface BannerProps
  extends Pick<
    RequiredBannerProps,
    'heading' | 'dismissible' | 'hidden' | 'tone'
  > {
  /**
   * The color tone of the banner based on its semantic meaning.
   *
   * @default 'auto'
   */
  tone: Extract<
    RequiredBannerProps['tone'],
    'auto' | 'critical' | 'warning' | 'success' | 'info'
  >;
}

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
}

/**
 * A custom element for displaying important messages and notifications.
 */
declare class Banner extends PolarisCustomElement implements BannerProps {
  /**
   * The heading text displayed at the top of the banner.
   */
  accessor heading: BannerProps['heading'];
  /**
   * The color tone of the banner based on its semantic meaning.
   */
  accessor tone: BannerProps['tone'];
  /**
   * Whether the banner is hidden from view.
   */
  accessor hidden: BannerProps['hidden'];
  /**
   * Whether the banner can be dismissed by the user.
   */
  accessor dismissible: BannerProps['dismissible'];
  /**
   * A callback that's fired when the banner is dismissed.
   */
  accessor ondismiss: CallbackEventListener<typeof tagName> | null;
  /**
   * A callback that's fired after the banner finishes hiding.
   */
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
      [tagName]: Omit<BannerJSXProps, 'secondaryActions'> &
        PreactBaseElementPropsWithChildren<Banner>;
    }
  }
}

declare const tagName = 's-banner';
/**
 * The JSX properties for the banner component. These properties define how a banner is rendered in Preact or JSX.
 * @publicDocs
 */
export interface BannerJSXProps
  extends Partial<BannerProps>,
    Pick<BannerProps$1, 'id' | 'children'> {
  /**
   * The content of the banner.
   */
  children?: ComponentChildren;
  /**
   * The secondary actions to display at the bottom of the banner. Only buttons with the `variant` of `'secondary'` or `'auto'` are allowed. A maximum of two `s-button` components can be provided.
   */
  secondaryActions?: ComponentChildren;
  /**
   * A callback that's fired when the banner is dismissed.
   */
  onDismiss?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /**
   * A callback that's fired after the banner finishes hiding.
   */
  onAfterHide?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}

export {Banner};
export type {BannerJSXProps};
