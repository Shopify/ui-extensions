import {createRemoteComponent} from '@remote-ui/core';

export type DialogType = 'default' | 'alert' | 'error' | 'destructive';

export interface DialogProps {
  title: string;
  content?: string;
  actionText: string;
  secondaryActionText?: string;
  showSecondaryAction?: boolean;
  type?: DialogType;
  onCancel?: () => void;
  onAction: () => void;
}

export const Dialog = createRemoteComponent<'Dialog', DialogProps>('Dialog');
