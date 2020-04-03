import React, {useMemo} from 'react';
import {Page as PolarisPage, Thumbnail as PolarisThumbnail} from '@shopify/polaris';

import {PageProps} from '../../../client/core';

export default function Page({thumbnail, ...props}: PageProps) {
  const polarisThumbnail = useMemo(() => thumbnail && <PolarisThumbnail {...thumbnail} />, [
    thumbnail,
  ]);
  return <PolarisPage {...props} thumbnail={polarisThumbnail} />;
}
