import {createRemoteComponent} from '@shopify/remote-ui-core';

export interface ToastProps {
  content: string;
  error?: boolean;
  onDismiss?: () => void;
}

export const Toast = createRemoteComponent<'Toast', ToastProps>('Toast');
