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
  loading: AdminActionProps$1['loading'];
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

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
  /** @private */
  connectedCallback(): void;
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
