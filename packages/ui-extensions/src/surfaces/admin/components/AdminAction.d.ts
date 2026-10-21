/** VERSION: 2.39.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  ComponentChildren,
  AdminActionProps$1,
  PreactCustomElement,
  RenderImpl,
} from './shared.d.ts';
import * as preact$1 from 'preact';
import {ReactNode, RefAttributes} from 'react';

/**
 * Configure the following properties on the admin action component.
 * @publicDocs
 */
export interface AdminActionProps
  extends Pick<AdminActionProps$1, 'heading' | 'loading'> {
  /**
   * Whether the action is in a loading state, such as during initial page load or when the action is being opened.
   * When `true`, the action is in an inert state that prevents user interaction.
   *
   * @default false
   */
  loading?: AdminActionProps$1['loading'];
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

declare const tagName = 's-admin-action';
export interface AdminActionJSXProps
  extends Partial<AdminActionProps>,
    Pick<AdminActionProps$1, 'id'> {
  /**
   * The main action button or link displayed in the admin action modal.
   * This represents the primary or most important action that users can take in this modal context, typically displayed with high visual prominence.
   */
  primaryAction: ComponentChildren;
  /**
   * Additional action buttons or links displayed in the admin action modal.
   * These provide alternative or supporting actions, visually de-emphasized compared to the primary action to establish clear hierarchy.
   */
  secondaryActions: ComponentChildren;
}

/**
 * What a component wants to hear about its own light DOM.
 *
 * Structure — children added, removed or moved — is always observed. The
 * `attributes` list is the part worth thinking about: the observer is a
 * `subtree` one, so every entry makes every descendant's writes to that
 * attribute wake this component up. List the attributes the component
 * actually reads off its children and nothing else.
 */
export interface LightDomObservation {
  /**
   * Descendant attributes that should call {@link lightDomChanged}. Omit it to
   * hear about structure only.
   *
   * `'all'` observes every attribute on every descendant, which is only right
   * for a component that mirrors arbitrary child markup it cannot enumerate:
   * Menu copies an item's `innerHTML`, and the quick picker field clones the
   * elements slotted into an option. Anything else should list its attributes.
   */
  attributes?: ReadonlyArray<string> | 'all';
}
/**
 * The observer installed for {@link observeLightDom}. Deliberately not
 * exported: nothing outside this module can name the symbol, so nothing
 * outside this module can reach the observer.
 */
declare const lightDomObserver: unique symbol;
/**
 * Static opt-in to light-DOM observation — see {@link LightDomObservation}.
 *
 * ```ts
 * static [observeLightDom]: LightDomObservation = { attributes: ['selected'] };
 * ```
 *
 * A Symbol key keeps this off the element's public API (and out of the
 * generated docs and definitions) while still letting subclasses in other
 * files declare it.
 */
declare const observeLightDom: unique symbol;
/**
 * Called once per batch of light-DOM mutations a component opted into with
 * {@link observeLightDom}. Defaults to a re-render; override it with a Symbol
 * key, the same way the opt-in is declared, to do more.
 */
declare const lightDomChanged: unique symbol;
declare class PolarisCustomElement extends PreactCustomElement {
  /**
   * Opt in to light-DOM observation. Undefined means no observer is created.
   * @private
   */
  static [observeLightDom]?: LightDomObservation;
  /** @private */
  [lightDomObserver]?: MutationObserver;
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
  /**
   * Runs when the light DOM this component opted into observing changes.
   * @private
   */
  [lightDomChanged](): void;
  /** @private */
  connectedCallback(): void;
  /** @private */
  disconnectedCallback(): void;
  /** @private */
  adoptedCallback(): void;
}

/**
 * Configure the following properties on the admin action component.
 * @publicDocs
 */
declare class AdminAction
  extends PolarisCustomElement
  implements AdminActionProps
{
  /**
   * The text to use as the Action modal's title. If not provided, the name of the extension will be used.
   */
  heading: string;
  /**
   * Whether the action is in a loading state, such as during initial page load or when the action is being opened. When `true`, the action might be in an inert state that prevents user interaction.
   */
  loading: boolean;
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: AdminAction;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: Omit<
        AdminActionJSXProps,
        'primaryAction' | 'secondaryActions'
      > & {
        children?: preact.ComponentChildren;
      };
    }
  }
}

export {AdminAction};
export type {AdminActionJSXProps};
