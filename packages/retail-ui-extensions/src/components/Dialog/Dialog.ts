import {createRemoteComponent} from '@remote-ui/core';
import type {TestableComponentProps} from '../shared';

export type DialogType = 'default' | 'alert' | 'error' | 'destructive';

export interface DialogProps extends TestableComponentProps {
  title: string;
  content?: string;
  actionText: string;
  secondaryActionText?: string;
  showSecondaryAction?: boolean;
  type?: DialogType;
  onAction: () => void;
  onSecondaryAction?: () => void;
  isVisible: boolean;
}

export const Dialog = createRemoteComponent<'Dialog', DialogProps>('Dialog');
