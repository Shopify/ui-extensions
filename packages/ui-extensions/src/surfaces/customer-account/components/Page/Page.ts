/* eslint-disable @typescript-eslint/triple-slash-reference */
/* eslint-disable spaced-comment */
/* eslint-disable @typescript-eslint/no-namespace */
/// <reference types="preact" />
import {createRemoteComponent} from '@remote-ui/core';
import type {RemoteFragment} from '@remote-ui/core';
import type {BaseElementPropsWithChildren} from '../shared';

export interface PageProps {
  /**
   * The text to be used as title.
   */
  title: string;

  /**
   * The text to be used as subtitle.
   */
  subtitle?: string;

  /**
   * The action grouping, provided as button(s), that is placed in the primary position of the page.
   */
  primaryAction?: RemoteFragment;

  /**
   * Label for the primary action grouping. If a label is not provided, default text is used.
   *
   * @defaultValue "More actions"
   */
  primaryActionLabel?: string;

  /**
   * Accessibility label for the primary action grouping. If an accessibility label is not provided,
   * default text is used.
   *
   * @defaultValue "More actions"
   */
  primaryActionAccessibilityLabel?: string;

  /**
   * The action grouping, provided as button(s), that is placed in the secondary position of the page.
   */
  secondaryAction?: RemoteFragment;

  /**
   * Indicates that the page is in a loading state.
   *
   * When `true`, the page shows loading indicators for the UI elements that it is owns.
   * The page is not responsible for the loading indicators of any content that is passed as `children`.
   *
   * @defaultValue false
   */
  loading?: boolean;
}

export interface PageElement extends PageProps, Omit<HTMLElement, 'id'> {}

declare global {
  interface HTMLElementTagNameMap {
    's-page': PageElement;
  }
}

declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      's-page': PageProps & BaseElementPropsWithChildren<PageElement>;
    }
  }
}

export const Page = createRemoteComponent<'Page', PageProps>('Page');
