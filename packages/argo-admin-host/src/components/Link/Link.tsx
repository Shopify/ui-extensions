import React, {useCallback} from 'react';
import {Link as ArgoLink} from '@shopify/argo-admin';
import {ReactPropsFromRemoteComponentType} from '@shopify/argo-admin/utilities';
import {Link as PolarisLink} from '@shopify/polaris';

type LinkProps = ReactPropsFromRemoteComponentType<typeof ArgoLink>;

export default function Link({children, external, onClick, url}: LinkProps) {
  const polarisOnClick = useCallback(() => onClick?.(), [onClick]);
  return (
    <PolarisLink external={external} url={url} onClick={polarisOnClick}>
      {children}
    </PolarisLink>
  );
}
