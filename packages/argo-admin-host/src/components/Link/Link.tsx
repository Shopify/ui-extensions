import React, {useCallback} from 'react';
import {ReactPropsFromRemoteComponentType} from '@remote-ui/react';
import {Link as ArgoLink} from '@shopify/argo-admin-react';
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
