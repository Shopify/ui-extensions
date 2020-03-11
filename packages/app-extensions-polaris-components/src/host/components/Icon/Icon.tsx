import {Icon as PolarisIcon} from '@shopify/polaris';
import {StarFilledMinor, StarOutlineMinor, SortMinor} from '@shopify/polaris-icons';
import React from 'react';

import {IconProps} from '../../../client/core';

type IconMap = {
  [key in string]: React.SFC<React.SVGProps<SVGSVGElement>>;
};
const iconMap: IconMap = {
  starFilled: StarFilledMinor,
  starHollow: StarOutlineMinor,
  sortMinor: SortMinor,
};

export default function Icon(props: IconProps) {
  const {source: sourceProp, ...otherProps} = props;
  const source = iconMap[sourceProp];

  if (!source) {
    throw new Error('Missing required props: source');
  }

  return <PolarisIcon {...otherProps} source={source} />;
}
