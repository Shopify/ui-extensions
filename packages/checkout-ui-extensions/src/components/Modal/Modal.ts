import {createRemoteComponent} from '@remote-ui/core';

export interface ModalProps {
  /**
   * A unique identifier for the Modal. When no `id` is set,
   * a globally unique value will be used instead.
   */
  id?: string;
  /**
   * Callback when the modal is closed. That is when either the close button, the backdrop,
   * or the `escape` key are pressed.
   */
  onClose?: () => void;
  /**
   * A title rendered at the top of the modal.
   */
  title?: string;
  /**
   * A label to describe the purpose of the modal that is announced by screen readers.
   * If not set, it will use the value of `title`.
   */
  accessibilityLabel?: string;
  /**
   * Adds a default spacing around both header (which holds the `title`) and content of the modal.
   */
  padding?: boolean;
}

/**
 * Modals are a special type of overlay that shift focus towards a specific action/set of information
 * before the main flow can proceed.
 * They must be specified inside the `overlay` prop of an activator component (`Button`, `Link` or `Pressable`).
 *
 * The library takes care of applying the WAI-ARIA Dialog pattern automatically for the activator
 * and the modal content.
 */
export const Modal = createRemoteComponent<'Modal', ModalProps>('Modal');
