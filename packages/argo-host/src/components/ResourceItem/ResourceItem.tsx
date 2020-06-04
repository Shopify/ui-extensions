import React, {useCallback} from 'react';
import {ResourceItem as ArgoResourceItem} from '@shopify/argo';
import {ReactPropsFromRemoteComponentType} from '@shopify/argo/utilities';
import {ResourceItem as PolarisResourceItem} from '@shopify/polaris';

type ResourceItemProps = ReactPropsFromRemoteComponentType<typeof ArgoResourceItem>;

export default function ResourceItem({id, onClick, children}: ResourceItemProps) {
  const polarisId = id.toString();
  const polarisOnClick = useCallback(() => onClick(), [onClick]);
  return (
    <PolarisResourceItem id={polarisId} onClick={polarisOnClick}>
      {children}
    </PolarisResourceItem>
  );
}
