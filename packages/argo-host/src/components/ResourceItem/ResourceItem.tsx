import React, {useCallback} from 'react';
import {ResourceItemProps} from '@shopify/argo/components';
import {ResourceItem as PolarisResouceItem} from '@shopify/polaris';

export default function ResourceItem({id, onClick, children}: ResourceItemProps) {
  const polarisId = id.toString();
  const polarisOnClick = useCallback(() => onClick(), [onClick]);
  return (
    <PolarisResouceItem id={polarisId} onClick={polarisOnClick}>
      {children}
    </PolarisResouceItem>
  );
}
