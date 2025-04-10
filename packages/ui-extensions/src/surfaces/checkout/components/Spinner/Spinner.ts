import {createRemoteComponent} from '@remote-ui/core';
import type {SpinnerProps as BaseSpinnerProps} from '@shopify/ui-api-design/dist/components/Spinner';

export interface SpinnerProps extends Omit<BaseSpinnerProps, 'size'> {
  size?: Extract<
    BaseSpinnerProps['size'],
    'small-100' | 'small' | 'base' | 'large' | 'large-100'
  >;
}

export const spinnerSizes = [
  'small-100',
  'small',
  'base',
  'large',
  'large-100',
] satisfies SpinnerProps['size'][];

/**
 * Spinner is used to notify buyers that their action is being processed.
 * The Spinner is usually used when sending or receiving data from a server.
 */
export interface SpinnerElement extends SpinnerProps, Omit<HTMLElement, 'id'> {}

declare global {
  interface HTMLElementTagNameMap {
    's-spinner': SpinnerElement;
  }
}

export const Spinner = createRemoteComponent<'Spinner', SpinnerProps>(
  'Spinner',
);
