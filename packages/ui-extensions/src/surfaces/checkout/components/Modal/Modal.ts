import type {RemoteFragment} from '@remote-ui/core';
import {createRemoteComponent} from '@remote-ui/core';

/** @publicDocs */
export interface ModalProps {
  /**
   * A unique identifier for the modal. When no `id` is set, a globally unique value will be used instead.
   */
  id?: string;
  /**
   * A callback fired when the modal is closed. This is triggered when the close button, the backdrop, or the `escape` key are pressed.
   */
  onClose?: () => void;
  /**
   * A callback fired when the modal is opened. This is called at the beginning of the transition that opens the modal.
   */
  onOpen?: () => void;
  /**
   * A title rendered at the top of the modal.
   */
  title?: string;
  /**
   * A label that describes the purpose of the modal, announced by screen readers. If not set, it will use the value of `title`.
   */
  accessibilityLabel?: string;
  /**
   * Whether to add default spacing around both the header (which holds the `title`) and the content of the modal.
   */
  padding?: boolean;
  /**
   * Adjust the size of the modal.
   *
   * - `'small'`: A compact modal for simple confirmations or short messages.
   * - `'auto'`: Automatically sizes the modal based on its content.
   * - `'large'`: A large modal for complex content or forms.
   * - `'max'`: Expands the modal to its maximum size, on both the horizontal and vertical axes.
   *
   * @default 'auto'
   */
  size?: 'small' | 'auto' | 'large' | 'max';
  /**
   * The primary action to perform, provided as a button component. Only one button can be rendered.
   */
  primaryAction?: RemoteFragment;
  /**
   * The secondary actions to perform, provided as button components. Only one button can be rendered.
   */
  secondaryActions?: RemoteFragment;
}

export const Modal = createRemoteComponent<'Modal', ModalProps>('Modal');
