import {Page as PolarisPage, Thumbnail as PolarisThumbnail} from '@shopify/polaris';
import React from 'react';

import {PageProps} from '../../../client/core';

export default function Page(props: PageProps) {
  const {thumbnail: thumbnailProps, ...otherProps} = props;
  return (
    <PolarisPage
      {...otherProps}
      thumbnail={thumbnailProps && <PolarisThumbnail {...thumbnailProps} />}
    />
  );
}
