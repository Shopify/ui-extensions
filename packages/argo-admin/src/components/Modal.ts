import {createRemoteComponent} from '../utilities';

import {DestructableAction} from '../types';

export interface ModalProps {
  open: boolean;
  title: string;
  primaryAction?: DestructableAction;
  secondaryActions?: DestructableAction[];
  onClose: () => void;
}

export const Modal = createRemoteComponent<'Modal', ModalProps>('Modal');
