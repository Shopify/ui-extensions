import {createRemoteComponent} from '@remote-ui/core';

export type DialogType = 'default' | 'alert' | 'error' | 'destructive';

export interface DialogProps {
  title: string;
  content?: string;
  isVisible: boolean;
  type?: DialogType;
  actionText: string;
  secondaryActionText?: string;
  showSecondaryAction?: boolean;
  onCancel?: () => void;
  onAction: () => void;
}

export const Dialog = createRemoteComponent<'Dialog', DialogProps>('Dialog');
