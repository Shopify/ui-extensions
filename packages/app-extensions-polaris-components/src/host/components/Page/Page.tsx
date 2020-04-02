import {Page as PolarisPage, Thumbnail as PolarisThumbnail} from '@shopify/polaris';
import React, {useMemo} from 'react';

import {PageProps} from '../../../client/core';

export default function Page({thumbnail, ...props}: PageProps) {
  const polarisThumbnail = useMemo(() => thumbnail && <PolarisThumbnail {...thumbnail} />, [
    thumbnail,
  ]);
  return <PolarisPage {...props} thumbnail={polarisThumbnail} />;
}
