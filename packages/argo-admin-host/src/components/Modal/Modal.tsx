import React, {useCallback} from 'react';
import {ReactPropsFromRemoteComponentType} from '@remote-ui/react';
import {Modal as ArgoModal} from '@shopify/argo-admin-react';
import {Modal as PolarisModal} from '@shopify/polaris';

import {useWrapAction, useWrapActions} from '../../utilities/components';

type ModalProps = ReactPropsFromRemoteComponentType<typeof ArgoModal>;

export default function Modal({
  primaryAction,
  secondaryActions,
  onClose,
  children,
  open,
  title,
}: ModalProps) {
  const polarisPrimaryAction = useWrapAction(primaryAction);
  const polarisSecondaryActions = useWrapActions(secondaryActions);
  const polarisOnClose = useCallback(() => onClose(), [onClose]);
  return (
    <PolarisModal
      open={open}
      title={title}
      primaryAction={polarisPrimaryAction}
      secondaryActions={polarisSecondaryActions}
      onClose={polarisOnClose}
    >
      <PolarisModal.Section>{children}</PolarisModal.Section>
    </PolarisModal>
  );
}
