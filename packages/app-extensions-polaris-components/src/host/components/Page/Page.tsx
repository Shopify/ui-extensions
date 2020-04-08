import React, {useMemo} from 'react';
import {Page as PolarisPage, Thumbnail as PolarisThumbnail} from '@shopify/polaris';

import {PageProps} from '../../../client/core';
import {useWrapAction, useWrapActions} from '../../utilities/components';

export default function Page({thumbnail, primaryAction, secondaryActions, ...props}: PageProps) {
  const polarisPrimaryAction = useWrapAction(primaryAction);
  const polarisSecondaryActions = useWrapActions(secondaryActions);
  const polarisThumbnail = useMemo(() => thumbnail && <PolarisThumbnail {...thumbnail} />, [
    thumbnail,
  ]);
  return (
    <PolarisPage
      {...props}
      thumbnail={polarisThumbnail}
      primaryAction={polarisPrimaryAction}
      secondaryActions={polarisSecondaryActions}
    />
  );
}
