import React from 'react';
import {Card as ArgoCard} from '@shopify/argo-admin';
import {ReactPropsFromRemoteComponentType} from '@shopify/argo-admin/utilities';
import {Card as PolarisCard} from '@shopify/polaris';

import {useWrapAction, useWrapActions} from '../../utilities/components';

type CardProps = ReactPropsFromRemoteComponentType<typeof ArgoCard>;

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
