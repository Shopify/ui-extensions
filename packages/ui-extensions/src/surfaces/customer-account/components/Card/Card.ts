/* eslint-disable @typescript-eslint/triple-slash-reference */
/* eslint-disable spaced-comment */
/* eslint-disable @typescript-eslint/no-namespace */
/// <reference types="preact" />
import {createRemoteComponent} from '@remote-ui/core';
import type {BaseElementPropsWithChildren} from '../shared';

export interface CardProps {
  /**
   * Adjust the padding of all edges.
   *
   * `true` applies a default padding that is appropriate for the component.
   */
  padding?: boolean;
}

export interface CardElement extends CardProps, Omit<HTMLElement, 'id'> {}

declare global {
  interface HTMLElementTagNameMap {
    's-card': CardElement;
  }
}

declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      's-card': CardProps & BaseElementPropsWithChildren<CardElement>;
    }
  }
}

export const Card = createRemoteComponent<'Card', CardProps>('Card');
