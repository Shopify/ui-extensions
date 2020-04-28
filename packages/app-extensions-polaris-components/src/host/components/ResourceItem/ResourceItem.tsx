import React, {useCallback} from 'react';
import {ResourceItem as PolarisResouceItem} from '@shopify/polaris';

import {ResourceItemProps} from '../../../client/core';

export default function ResourceItem({id, onClick, children}: ResourceItemProps) {
  const polarisId = id.toString();
  const polarisOnClick = useCallback(() => onClick(), [onClick]);
  return (
    <PolarisResouceItem id={polarisId} onClick={polarisOnClick}>
      {children}
    </PolarisResouceItem>
  );
}
