import React, {useCallback} from 'react';
import {ReactPropsFromRemoteComponentType} from '@remote-ui/react';
import {ResourceItem as ArgoResourceItem} from '@shopify/argo-admin-react';
import {ResourceItem as PolarisResourceItem} from '@shopify/polaris';

type ResourceItemProps = ReactPropsFromRemoteComponentType<typeof ArgoResourceItem>;

export default function ResourceItem({id, onClick, children}: ResourceItemProps) {
  const polarisId = id;
  const polarisOnClick = useCallback(() => onClick(), [onClick]);
  return (
    <PolarisResourceItem id={polarisId} onClick={polarisOnClick}>
      {children}
    </PolarisResourceItem>
  );
}
