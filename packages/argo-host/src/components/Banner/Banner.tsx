import React, {useCallback} from 'react';
import {BannerProps} from '@shopify/argo';
import {Banner as PolarisBanner} from '@shopify/polaris';

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
