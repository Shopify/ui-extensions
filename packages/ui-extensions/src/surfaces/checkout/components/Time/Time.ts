import type {TimeProps as BaseTimeProps} from '@shopify/ui-api-design/dist/components/Time';

export interface TimeProps extends Pick<BaseTimeProps, 'dateTime'> {}

export interface TimeElement extends TimeProps, Omit<HTMLElement, 'id'> {}

declare global {
  interface HTMLElementTagNameMap {
    's-time': TimeElement;
  }
}
