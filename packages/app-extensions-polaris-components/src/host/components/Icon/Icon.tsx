import React from 'react';
import {Icon as PolarisIcon} from '@shopify/polaris';
import {
  SearchMinor,
  SortMinor,
  StarFilledMinor,
  StarOutlineMinor,
  CancelSmallMinor,
} from '@shopify/polaris-icons';

import {IconProps} from '../../../client/core';

type IconMap = {
  [key in string]: React.SFC<React.SVGProps<SVGSVGElement>>;
};
const iconMap: IconMap = {
  cancelSmallMinor: CancelSmallMinor,
  searchMinor: SearchMinor,
  starFilled: StarFilledMinor,
  starHollow: StarOutlineMinor,
  sortMinor: SortMinor,
};

export default function Icon({source, accessibilityLabel, color}: IconProps) {
  const polarisSource = iconMap[source];

  if (!polarisSource) {
    throw new Error('Missing required props: source');
  }

  return (
    <PolarisIcon accessibilityLabel={accessibilityLabel} color={color} source={polarisSource} />
  );
}
