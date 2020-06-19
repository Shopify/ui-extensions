import React, {useCallback} from 'react';
import {Banner as ArgoBanner} from '@shopify/argo-admin';
import {ReactPropsFromRemoteComponentType} from '@shopify/argo-admin/utilities';
import {Banner as PolarisBanner} from '@shopify/polaris';

import {useWrapAction} from '../../utilities/components';

type BannerProps = ReactPropsFromRemoteComponentType<typeof ArgoBanner>;

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
