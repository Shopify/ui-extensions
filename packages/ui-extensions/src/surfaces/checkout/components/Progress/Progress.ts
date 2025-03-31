import {createRemoteComponent} from '@remote-ui/core';
import type {ProgressProps as BaseProgressProps} from '@shopify/ui-api-design/dist/components/Progress';

export interface ProgressProps
  extends Pick<
    BaseProgressProps,
    'id' | 'accessibilityLabel' | 'value' | 'max'
  > {
  tone?: Extract<BaseProgressProps['tone'], 'auto' | 'critical'>;
}

export const Progress = createRemoteComponent<'Progress', ProgressProps>(
  'Progress',
);
