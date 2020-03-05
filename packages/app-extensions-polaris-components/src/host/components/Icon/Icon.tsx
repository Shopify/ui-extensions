import {Icon as PolarisIcon} from '@shopify/polaris';
import {StarFilledMinor, StarOutlineMinor} from '@shopify/polaris-icons';
import React from 'react';

import {IconProps} from '../../../client/core';

type IconMap = {
  [key in IconProps['source']]: React.SFC<React.SVGProps<SVGSVGElement>>;
};
const iconMap: IconMap = {
  starFilled: StarFilledMinor,
  starHollow: StarOutlineMinor,
};

export default function Icon(props: IconProps) {
  const {source: sourceProp, ...otherProps} = props;
  const source = iconMap[sourceProp];
  return source && <PolarisIcon {...otherProps} source={source} />;
}
