import {Modal as BaseModal} from '@shopify/ui-extensions/checkout';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';
import {createRemoteComponent} from '@remote-dom/react';

// @ts-ignore
export type ModalProps = ReactPropsFromRemoteComponentType<typeof BaseModal>;

export const Modal = createRemoteComponent('ui-modal', BaseModal);
