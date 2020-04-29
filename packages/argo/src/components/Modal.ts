import {createRemoteComponent} from '@shopify/remote-ui-core';

import {Action} from '../types';

export interface ModalProps {
  open: boolean;
  title: string;
  primaryAction?: Action;
  secondaryActions?: Action[];
  onClose: () => void;
  children?: React.ReactNode;
}

export const Modal = createRemoteComponent<'Modal', ModalProps>('Modal');
