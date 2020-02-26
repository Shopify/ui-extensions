import {createRemoteComponent} from '@shopify/remote-ui-core';

export interface ToastProps {
  message: string;
  error?: boolean;
  onDismiss?: () => void;
}

export const Toast = createRemoteComponent<'Toast', ToastProps>('Toast');
