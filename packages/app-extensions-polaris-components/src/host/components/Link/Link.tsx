import React, {useCallback} from 'react';
import {Link as PolarisLink} from '@shopify/polaris';
import {LinkProps} from '../../../client/core';

export default function Link({children, external, onClick, url}: LinkProps) {
  const polarisOnClick = useCallback(() => onClick?.(), [onClick]);
  return (
    <PolarisLink external={external} url={url} onClick={polarisOnClick}>
      {children}
    </PolarisLink>
  );
}
