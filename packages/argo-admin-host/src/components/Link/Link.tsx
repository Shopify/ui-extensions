import React, {useCallback} from 'react';
import {ReactPropsFromRemoteComponentType} from '@remote-ui/react';
import {Link as ArgoLink} from '@shopify/argo-admin-react';
import {Link as PolarisLink} from '@shopify/polaris';

import {isSafe} from './safe-redirect';

type LinkProps = ReactPropsFromRemoteComponentType<typeof ArgoLink>;

export function isAbsolute(url: string) {
  return /^https?/.test(url);
}

export function isExternalLink(url: string) {
  const absolute = isAbsolute(url);

  if (absolute) {
    let parsedUrl;

    try {
      parsedUrl = new URL(url);
    } catch (error) {
      // Invalid URL
      return true;
    }

    return parsedUrl.hostname !== location.hostname || !parsedUrl.pathname.includes('/admin');
  }

  return url.startsWith('/') && !url.startsWith('/admin');
}

export default function Link({children, external, onPress, url}: LinkProps) {
  const polarisOnClick = useCallback(() => onPress?.(), [onPress]);

  if (!url) {
    return <PolarisLink onClick={polarisOnClick}>{children}</PolarisLink>;
  }

  // If the URL scheme is javascript:, we want to return it as plain text to prevent XSS
  if (!isSafe(url)) {
    // eslint-disable-next-line no-console
    console.warn(`The url provided "${url}" is unsafe. The link will be displayed as plain text`);
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    return <a>{children}</a>;
  }

  const isExternal = isExternalLink(url) || external;

  if (isExternal) {
    return (
      <a target="_blank" href={url} rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <PolarisLink external={external} url={url} onClick={polarisOnClick}>
      {children}
    </PolarisLink>
  );
}
