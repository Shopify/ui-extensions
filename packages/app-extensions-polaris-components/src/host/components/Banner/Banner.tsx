import React, {useCallback} from 'react';
import {Banner as PolarisBanner} from '@shopify/polaris';
import {BannerProps} from '../../../client/core';
import {useWrapAction} from '../../utilities/components';

export default function Banner({onDismiss, action, ...props}: BannerProps) {
  const polarisOnDismiss = useCallback(() => onDismiss?.(), [onDismiss]);
  const polarisAction = useWrapAction(action);
  return <PolarisBanner {...props} action={polarisAction} onDismiss={polarisOnDismiss} />;
}
