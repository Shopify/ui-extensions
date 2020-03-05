import {Page as PolarisPage, Thumbnail as PolarisThumbnail} from '@shopify/polaris';
import React from 'react';

import {PageProps} from '../../../client/core';

export default function Page(props: PageProps) {
  const {thumbnail: thumbnailProp, ...otherProps} = props;
  const thumbnail = thumbnailProp && <PolarisThumbnail {...thumbnailProp} />;
  return <PolarisPage {...otherProps} thumbnail={thumbnail} />;
}
