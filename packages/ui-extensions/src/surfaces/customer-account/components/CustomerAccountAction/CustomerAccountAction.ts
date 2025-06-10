/* eslint-disable @typescript-eslint/triple-slash-reference */
/* eslint-disable spaced-comment */
/* eslint-disable @typescript-eslint/no-namespace */
/// <reference types="preact" />
import {createRemoteComponent} from '@remote-ui/core';
import type {RemoteFragment} from '@remote-ui/core';
import type {BaseElementPropsWithChildren} from '../shared';

export interface CustomerAccountActionProps {
  /**
   * Sets the title of the Action container.
   */
  title: string;
  /**
   * Sets the Primary action button of the container. This component must be a button component.
   */
  primaryAction?: RemoteFragment;
  /**
   * Sets the Secondary action button of the container. This component must be a button component.
   */
  secondaryAction?: RemoteFragment;
}

export interface CustomerAccountActionElement
  extends CustomerAccountActionProps,
    Omit<HTMLElement, 'id'> {}

declare global {
  interface HTMLElementTagNameMap {
    's-customer-account-action': CustomerAccountActionElement;
  }
}

declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      's-customer-account-action': CustomerAccountActionProps &
        BaseElementPropsWithChildren<CustomerAccountActionElement>;
    }
  }
}

export const CustomerAccountAction = createRemoteComponent<
  'CustomerAccountAction',
  CustomerAccountActionProps
>('CustomerAccountAction');
