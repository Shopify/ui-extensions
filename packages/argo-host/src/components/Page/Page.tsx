import React, {useMemo} from 'react';
import {Page as ArgoPage} from '@shopify/argo';
import {ReactPropsFromRemoteComponentType} from '@shopify/argo/utilities';
import {Page as PolarisPage, Thumbnail as PolarisThumbnail} from '@shopify/polaris';

import {useWrapAction, useWrapActions} from '../../utilities/components';

type PageProps = ReactPropsFromRemoteComponentType<typeof ArgoPage>;

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
