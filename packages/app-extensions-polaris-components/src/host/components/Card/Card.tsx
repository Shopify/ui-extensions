import React from 'react';
import {Card as PolarisCard} from '@shopify/polaris';

import {CardProps} from '../../../client/core';
import {useWrapAction, useWrapActions} from '../../utilities/components';

export default function Card({
  primaryFooterAction,
  secondaryFooterActions,
  title,
  children,
  sectioned,
}: CardProps) {
  const polarisPrimaryFooterAction = useWrapAction(primaryFooterAction);
  const polarisSecondaryFooterActions = useWrapActions(secondaryFooterActions);
  return (
    <PolarisCard
      title={title}
      sectioned={sectioned}
      primaryFooterAction={polarisPrimaryFooterAction}
      secondaryFooterActions={polarisSecondaryFooterActions}
    >
      {children}
    </PolarisCard>
  );
}
