import React, {useCallback} from 'react';
import {ResourceItemProps} from '@shopify/argo/components';
import {ResourceItem as PolarisResourceItem} from '@shopify/polaris';

export default function ResourceItem({id, onClick, children}: ResourceItemProps) {
  const polarisId = id.toString();
  const polarisOnClick = useCallback(() => onClick(), [onClick]);
  return (
    <PolarisResourceItem id={polarisId} onClick={polarisOnClick}>
      {children}
    </PolarisResourceItem>
  );
}
