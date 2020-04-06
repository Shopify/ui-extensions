import React, {useCallback} from 'react';
import {Link as PolarisLink} from '@shopify/polaris';
import {LinkProps} from '../../../client/core';

export default function Link(props: LinkProps) {
  const polarisOnClick = useCallback(() => props.onClick?.(), [props.onClick]);
  return <PolarisLink {...props} onClick={polarisOnClick} />;
}
