import type {ProgressProps as BaseProgressProps} from '@shopify/ui-api-design';

export interface ProgressProps extends Omit<BaseProgressProps, 'tone'> {
  tone?: Extract<BaseProgressProps['tone'], 'auto' | 'critical'>;
}
export interface ProgressElement
  extends ProgressProps,
    Omit<HTMLElement, 'id'> {}

declare global {
  interface HTMLElementTagNameMap {
    's-progress': ProgressElement;
  }
}
