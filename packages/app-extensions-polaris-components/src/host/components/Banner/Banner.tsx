import React, {useCallback} from 'react';
import {Banner as PolarisBanner} from '@shopify/polaris';

import {BannerProps} from '../../../client/core';
import {useWrapAction} from '../../utilities/components';

export default function Banner({onDismiss, action, status, title, children}: BannerProps) {
  const polarisOnDismiss = useCallback(() => onDismiss?.(), [onDismiss]);
  const polarisAction = useWrapAction(action);
  return (
    <PolarisBanner
      status={status}
      title={title}
      action={polarisAction}
      onDismiss={polarisOnDismiss}
    >
      {children}
    </PolarisBanner>
  );
}
