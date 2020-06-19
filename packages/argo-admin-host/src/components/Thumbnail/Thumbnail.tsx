import React from 'react';
import {ThumbnailProps} from '@shopify/argo-admin';
import {Thumbnail as PolarisThumbnail} from '@shopify/polaris';

export default function Thumbnail({alt, source, size}: ThumbnailProps) {
  // TODO: need to handle props.scaleType
  return <PolarisThumbnail alt={alt} source={source} size={size} />;
}
