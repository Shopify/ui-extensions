import {createRemoteComponent} from '@remote-ui/core';
import type {ProgressProps as BaseProgressProps} from '@shopify/ui-api-design/dist/components/Progress';

export interface ProgressProps extends Omit<BaseProgressProps, 'tone'> {
  tone?: Extract<BaseProgressProps['tone'], 'auto' | 'critical'>;
}

export const Progress = createRemoteComponent<'Progress', ProgressProps>(
  'Progress',
);

export interface ProgressElement
  extends ProgressProps,
    Omit<HTMLElement, 'id'> {}

declare global {
  interface HTMLElementTagNameMap {
    's-progress': ProgressElement;
  }
}
