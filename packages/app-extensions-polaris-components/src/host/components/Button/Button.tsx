import {Button as PolarisButton} from '@shopify/polaris';
import React from 'react';

import {ButtonProps} from '../../../client/core';

import Icon from '../Icon';

export default function Button(props: ButtonProps) {
  const {title, icon, ...otherProps} = props;
  return (
    <PolarisButton {...otherProps} icon={icon && <Icon {...icon} />}>
      {title}
    </PolarisButton>
  );
}
