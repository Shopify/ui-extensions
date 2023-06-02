import {createRemoteComponent} from '@remote-ui/core';

import {DestructableAction} from '../shared';

export interface ModalProps {
  /**
   * Whether the modal is open.
   */
  open: boolean;
  /**
   * Title content for the modal, when rendered.
   */
  title: string;
  /**
   * Modal's primary action, ie 'Save' or 'Accept'.
   */
  primaryAction?: DestructableAction;
  /**
   * Modal's secondary action(s), ie 'Cancel'.
   */
  secondaryActions?: DestructableAction[];
  /**
   * Callback when the modal is closed.
   */
  onClose: () => void;
}

/**
 * Modals are overlays that prevent merchants from interacting with the rest of the application until a specific action is taken.
 *
 * Modals are disruptive by design, requiring merchants to take an action before they can continue, so use them thoughtfully and sparingly.
 */
export const Modal = createRemoteComponent<'Modal', ModalProps>('Modal');
