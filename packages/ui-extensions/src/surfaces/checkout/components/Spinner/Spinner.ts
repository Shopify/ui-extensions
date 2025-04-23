import type {SpinnerProps as BaseSpinnerProps} from '@shopify/ui-api-design';

export interface SpinnerProps extends Omit<BaseSpinnerProps, 'size'> {
  size?: Extract<
    BaseSpinnerProps['size'],
    'small-100' | 'small' | 'base' | 'large' | 'large-100'
  >;
}

export interface SpinnerElement extends SpinnerProps, Omit<HTMLElement, 'id'> {}

declare global {
  interface HTMLElementTagNameMap {
    's-spinner': SpinnerElement;
  }
}
