import React from 'react';
import {Thumbnail as PolarisThumbnail} from '@shopify/polaris';

import {ThumbnailProps} from '../../../client/core';

export default function Thumbnail(props: ThumbnailProps) {
  // TODO: need to handle props.scaleType
  return <PolarisThumbnail {...props} />;
}
