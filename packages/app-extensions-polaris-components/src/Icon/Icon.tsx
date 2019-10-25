import React from 'react';
import {Icon as PolarisIcon, IconProps} from '@shopify/polaris';

export default function Icon({source, ...props}: IconProps) {
  // To Do - find an async way to load the polaris icon without having all icons in memory
  return <PolarisIcon source={source} {...props} />;
}
