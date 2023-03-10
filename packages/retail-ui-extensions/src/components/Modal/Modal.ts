import {createRemoteComponent} from '@remote-ui/core';
import {Destination} from 'extension-api';

/** Wraps a `Navigator` or `Screen` in a `Modal`, which will present its content modally (from the bottom) when navigated to.
 * @property `name` used to identify this modal as a destination in the navigation stack.
 */
export interface ModalProps extends Destination {}

export const Modal = createRemoteComponent<'Modal', ModalProps>('Modal');
