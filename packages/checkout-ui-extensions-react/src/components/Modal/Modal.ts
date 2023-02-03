import {Modal as BaseModal} from '@shopify/checkout-ui-extensions';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type ModalProps = ReactPropsFromRemoteComponentType<typeof BaseModal>;

export const Modal = createRemoteReactComponent(BaseModal);
