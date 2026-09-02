/** VERSION: 2.23.0 **/
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
import type {
  ComponentChildren,
  BannerProps$1,
  PreactCustomElement,
  RenderImpl,
} from './shared.d.ts';
import * as preact$1 from 'preact';
import {ReactNode, RefAttributes} from 'react';

/**
 * An event object with a strongly-typed `currentTarget` property that references the specific HTML element that triggered the event.
 *
 * This type extends the standard DOM `Event` interface and ensures type safety when accessing the element that fired the event.
 * @publicDocs
 */
export type CallbackEvent<T extends keyof HTMLElementTagNameMap> = Event & {
  currentTarget: HTMLElementTagNameMap[T];
};
/**
 * A function that handles events from UI components.
 *
 * This type represents an event listener callback that receives a `CallbackEvent` with a strongly-typed `currentTarget`. Use this for component event handlers like `click`, `focus`, `blur`, and other DOM events.
 *
 * @example
 * const handleClick: CallbackEventListener<'button'> = (event) => {
 *   console.log('Button clicked:', event.currentTarget);
 * };
 * @publicDocs
 */
export type CallbackEventListener<T extends keyof HTMLElementTagNameMap> =
  | (EventListener & {
      (event: CallbackEvent<T>): void;
    })
  | null;
/**
 * Base props for Preact custom elements without children support. Includes common properties like key, ref, and slot for elements that don't accept child content.
 * @publicDocs
 */
export interface PreactBaseElementProps<TClass extends HTMLElement> {
  /**
   * A unique identifier for this element, used by the virtual DOM to efficiently track and update elements in lists.
   * Essential for maintaining component state and optimizing re-renders when lists change.
   */
  key?: preact.Key;
  /**
   * A reference to access the underlying DOM element directly.
   * Typically created using `useRef()` to interact with the element imperatively or measure its properties.
   */
  ref?: preact.Ref<TClass>;
  /**
   * The named slot to which this element is assigned in the parent component's shadow DOM.
   *
   * Used for advanced component composition with web components.
   */
  slot?: Lowercase<string>;
}
/**
 * Base props for Preact custom elements with children support. Extends PreactBaseElementProps with the ability to render child elements.
 * @publicDocs
 */
export interface PreactBaseElementPropsWithChildren<TClass extends HTMLElement>
  extends PreactBaseElementProps<TClass> {
  /**
   * The child elements to be rendered within this component.
   */
  children?: preact.ComponentChildren;
}

export type ReactIntrinsicElementChildren<PreactProps extends object> =
  'children' extends keyof PreactProps
    ? {
        children?: ReactNode;
      }
    : Record<never, never>;
export type ReactIntrinsicElementProps<
  PreactProps extends object,
  ElementType,
> = Omit<PreactProps, 'children' | 'key' | 'ref' | 'slot'> &
  ReactIntrinsicElementChildren<PreactProps> &
  RefAttributes<ElementType> & {
    slot?: Lowercase<string>;
  };
export type ReactIntrinsicElements = {
  [Tag in Exclude<
    Extract<keyof preact$1.createElement.JSX.IntrinsicElements, `s-${string}`>,
    `s-test-${string}`
  >]: ReactIntrinsicElementProps<
    preact$1.createElement.JSX.IntrinsicElements[Tag],
    Tag extends keyof HTMLElementTagNameMap
      ? HTMLElementTagNameMap[Tag]
      : HTMLElement
  >;
};
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends ReactIntrinsicElements {}
  }
}

/**
 * Represents the banner component props with all properties marked as required.
 * @publicDocs
 */
export type RequiredBannerProps = Required<BannerProps$1>;
/**
 * Configure the following properties on the banner component.
 */
export interface BannerProps
  extends Pick<
    RequiredBannerProps,
    'heading' | 'dismissible' | 'hidden' | 'tone'
  > {
  /**
   * The semantic meaning and color treatment of the component.
   *
   * - `info`: Informational content or helpful tips.
   * - `success`: Positive outcomes or successful states.
   * - `warning`: Important warnings about potential issues.
   * - `critical`: Urgent problems or destructive actions.
   * - `auto`: Automatically determined based on context.
   *
   * @default 'auto'
   */
  tone: Extract<
    RequiredBannerProps['tone'],
    'auto' | 'critical' | 'warning' | 'success' | 'info'
  >;
  /**
   * The heading text displayed at the top of the banner.
   *
   * @default ''
   */
  heading: RequiredBannerProps['heading'];
  /**
   * Whether the banner displays a close button that allows users to dismiss it.
   *
   * When the close button is pressed, the `dismiss` event fires, then `hidden` is set to `true`,
   * any animation completes, and the `afterhide` event fires.
   *
   * @default false
   */
  dismissible: RequiredBannerProps['dismissible'];
  /**
   * Controls whether the banner is visible or hidden.
   *
   * When using a controlled component pattern and the banner is `dismissible`,
   * update this property to `true` when the `dismiss` event fires.
   *
   * You can hide the banner programmatically by setting this to `true` even if it's not `dismissible`.
   *
   * @default false
   */
  hidden: RequiredBannerProps['hidden'];
}

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
  /** @private */
  connectedCallback(): void;
  /** @private */
  adoptedCallback(): void;
}

/**
 * Configure the following properties on the banner component.
 * @publicDocs
 */
declare class Banner extends PolarisCustomElement implements BannerProps {
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
      [tagName]: Omit<BannerJSXProps, 'secondaryActions'> &
        PreactBaseElementPropsWithChildren<Banner>;
    }
  }
}

declare const tagName = 's-banner';
export interface BannerJSXProps
  extends Partial<BannerProps>,
    Pick<BannerProps$1, 'id' | 'children'> {
  /**
   * The main message content displayed within the banner component, providing important information or guidance to users.
   */
  children?: ComponentChildren;
  /**
   * Action buttons displayed at the bottom of the banner that let users respond to the message.
   * Accepts up to two button components with `variant="secondary"` or `variant="auto"`.
   */
  secondaryActions?: ComponentChildren;
  /**
   * A callback fired when the user dismisses the banner by clicking the close button.
   * Use this to update your app state and control the banner's visibility.
   */
  onDismiss?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /**
   * A callback fired when the banner is completely hidden, after any hide animations have completed.
   * Use this to perform cleanup or trigger subsequent actions after the banner is no longer visible.
   */
  onAfterHide?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}

export {Banner};
export type {BannerJSXProps};
