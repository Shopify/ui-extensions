import React from 'react';
import {Thumbnail as PolarisThumbnail} from '@shopify/polaris';

import {ThumbnailProps} from '../../../client/core';

export default function Thumbnail({alt, source, size}: ThumbnailProps) {
  // TODO: need to handle props.scaleType
  return <PolarisThumbnail alt={alt} source={source} size={size} />;
}
