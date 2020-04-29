import React, {useCallback} from 'react';
import {LinkProps} from '@shopify/argo/components';
import {Link as PolarisLink} from '@shopify/polaris';

export default function Link({children, external, onClick, url}: LinkProps) {
  const polarisOnClick = useCallback(() => onClick?.(), [onClick]);
  return (
    <PolarisLink external={external} url={url} onClick={polarisOnClick}>
      {children}
    </PolarisLink>
  );
}
