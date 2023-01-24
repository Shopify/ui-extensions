import {Modal as BaseModal} from '@shopify/ui-extensions/admin';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export const Modal = createRemoteReactComponent(BaseModal);
export type ModalProps = ReactPropsFromRemoteComponentType<typeof BaseModal>;
