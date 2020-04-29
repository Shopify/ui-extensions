import React, {useMemo} from 'react';
import {PageProps} from '@shopify/argo/components';
import {Page as PolarisPage, Thumbnail as PolarisThumbnail} from '@shopify/polaris';

import {useWrapAction, useWrapActions} from '../../utilities/components';

export default function Page({
  thumbnail,
  primaryAction,
  secondaryActions,
  title,
  children,
  subTitle,
}: PageProps) {
  const polarisPrimaryAction = useWrapAction(primaryAction);
  const polarisSecondaryActions = useWrapActions(secondaryActions);
  const polarisThumbnail = useMemo(() => thumbnail && <PolarisThumbnail {...thumbnail} />, [
    thumbnail,
  ]);
  return (
    <PolarisPage
      title={title}
      subtitle={subTitle}
      thumbnail={polarisThumbnail}
      primaryAction={polarisPrimaryAction}
      secondaryActions={polarisSecondaryActions}
    >
      {children}
    </PolarisPage>
  );
}
