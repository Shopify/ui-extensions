import React from 'react';
import {ThumbnailProps} from '@shopify/argo/components';
import {Thumbnail as PolarisThumbnail} from '@shopify/polaris';

export default function Thumbnail({alt, source, size}: ThumbnailProps) {
  // TODO: need to handle props.scaleType
  return <PolarisThumbnail alt={alt} source={source} size={size} />;
}
