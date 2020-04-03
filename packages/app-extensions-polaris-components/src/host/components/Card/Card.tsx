import React from 'react';
import {Card as PolarisCard} from '@shopify/polaris';

import {CardProps} from '../../../client/core';
import {useWrapAction, useWrapActions} from '../../utilities/components';

export default function Card({primaryFooterAction, secondaryFooterActions, ...props}: CardProps) {
  const polarisPrimaryFooterAction = useWrapAction(primaryFooterAction);
  const polarisSecondaryFooterActions = useWrapActions(secondaryFooterActions);
  return (
    <PolarisCard
      {...props}
      primaryFooterAction={polarisPrimaryFooterAction}
      secondaryFooterActions={polarisSecondaryFooterActions}
    />
  );
}
