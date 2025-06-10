/* eslint-disable @typescript-eslint/triple-slash-reference */
/* eslint-disable spaced-comment */
/* eslint-disable @typescript-eslint/no-namespace */
/// <reference types="preact" />
import {createRemoteComponent} from '@remote-ui/core';
import type {RemoteFragment} from '@remote-ui/core';
import {LinkProps} from '../shared-checkout-components';
import type {BaseElementPropsWithChildren} from '../shared';

export interface ResourceItemProps
  extends Pick<LinkProps, 'accessibilityLabel' | 'to' | 'onPress'> {
  /**
   * The action grouping for the item, provided as buttons.
   */
  action?: RemoteFragment;

  /**
   * Label for the action grouping. If a label is not provided, default text is used.
   *
   * @defaultValue "More actions"
   */
  actionLabel?: string;

  /**
   * Accessibility label for the action grouping. If an accessibility label is not provided,
   * default text is used.
   *
   * @defaultValue "More actions"
   */
  actionAccessibilityLabel?: string;

  /**
   * Indicates that the item is in a loading state.
   *
   * When `true`, the item shows loading indicators for the UI elements that it is owns.
   * The item is not responsible for the loading indicators of any content that is passed as `children`.
   *
   * @defaultValue false
   */
  loading?: boolean;
}

export interface ResourceItemElement
  extends ResourceItemProps,
    Omit<HTMLElement, 'id'> {}

declare global {
  interface HTMLElementTagNameMap {
    's-resource-item': ResourceItemElement;
  }
}

declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      's-resource-item': ResourceItemProps &
        BaseElementPropsWithChildren<ResourceItemElement>;
    }
  }
}

export const ResourceItem = createRemoteComponent<
  'ResourceItem',
  ResourceItemProps
>('ResourceItem');
