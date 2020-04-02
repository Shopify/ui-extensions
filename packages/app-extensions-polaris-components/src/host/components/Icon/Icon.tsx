import {Icon as PolarisIcon} from '@shopify/polaris';
import {SearchMinor, SortMinor, StarFilledMinor, StarOutlineMinor} from '@shopify/polaris-icons';
import React from 'react';

import {IconProps} from '../../../client/core';

type IconMap = {
  [key in string]: React.SFC<React.SVGProps<SVGSVGElement>>;
};
const iconMap: IconMap = {
  searchMinor: SearchMinor,
  starFilled: StarFilledMinor,
  starHollow: StarOutlineMinor,
  sortMinor: SortMinor,
};

export default function Icon({source, ...props}: IconProps) {
  const polarisSource = iconMap[source];

  if (!polarisSource) {
    throw new Error('Missing required props: source');
  }

  return <PolarisIcon {...props} source={polarisSource} />;
}
