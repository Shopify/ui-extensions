import React from 'react';
import {CardProps} from '@shopify/argo';
import {Card as PolarisCard} from '@shopify/polaris';

import {useWrapAction, useWrapActions} from '../../utilities/components';

export default function Card({
  primaryFooterAction,
  secondaryFooterActions,
  title,
  children,
  sectioned,
  actions: cardHeaderActions,
}: CardProps) {
  const polarisPrimaryFooterAction = useWrapAction(primaryFooterAction);
  const polarisSecondaryFooterActions = useWrapActions(secondaryFooterActions);
  const polarisCardHeaderActions = useWrapActions(cardHeaderActions);
  return (
    <PolarisCard
      title={title}
      sectioned={sectioned}
      primaryFooterAction={polarisPrimaryFooterAction}
      secondaryFooterActions={polarisSecondaryFooterActions}
      actions={polarisCardHeaderActions}
    >
      {children}
    </PolarisCard>
  );
}
