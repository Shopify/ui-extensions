import React, {useCallback} from 'react';
import {Modal as PolarisModal} from '@shopify/polaris';

import {ModalProps} from '../../../client/core';
import {useWrapAction, useWrapActions} from '../../utilities/components';

export default function Modal({
  primaryAction,
  secondaryActions,
  onClose,
  children,
  message,
  ...props
}: ModalProps) {
  const polarisPrimaryAction = useWrapAction(primaryAction);
  const polarisSecondaryActions = useWrapActions(secondaryActions);
  const polarisOnClose = useCallback(() => onClose(), [onClose]);
  const polarisChildren = message ? message : children;
  return (
    <PolarisModal
      {...props}
      primaryAction={polarisPrimaryAction}
      secondaryActions={polarisSecondaryActions}
      onClose={polarisOnClose}
    >
      <PolarisModal.Section>{polarisChildren}</PolarisModal.Section>
    </PolarisModal>
  );
}
