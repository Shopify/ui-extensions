import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@shopify/remote-ui-react';

import {Modal as BaseModal} from '../../core';

export type ModalProps = ReactPropsFromRemoteComponentType<typeof BaseModal>;
export const Modal = createRemoteReactComponent(BaseModal);
