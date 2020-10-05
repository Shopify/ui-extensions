import React, {useCallback} from 'react';
import {ReactPropsFromRemoteComponentType} from '@remote-ui/react';
import {ResourceItem as ArgoResourceItem} from '@shopify/argo-admin-react';
import {ResourceItem as PolarisResourceItem} from '@shopify/polaris';

type ResourceItemProps = ReactPropsFromRemoteComponentType<typeof ArgoResourceItem>;

export default function ResourceItem({id, onPress, children}: ResourceItemProps) {
  const polarisId = id;
  const polarisOnClick = useCallback(() => onPress(), [onPress]);

  return (
    <PolarisResourceItem id={polarisId} onClick={polarisOnClick}>
      {children}
    </PolarisResourceItem>
  );
}
