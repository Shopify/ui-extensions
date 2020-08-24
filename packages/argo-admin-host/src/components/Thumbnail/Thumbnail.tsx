import React from 'react';
import {ThumbnailProps} from '@shopify/argo-admin';
import {Thumbnail as PolarisThumbnail} from '@shopify/polaris';

export default function Thumbnail({alt, source, size}: ThumbnailProps) {
  return <PolarisThumbnail alt={alt} source={source} size={size} />;
}
