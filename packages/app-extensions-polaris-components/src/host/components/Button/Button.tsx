import {Button as PolarisButton} from '@shopify/polaris';
import React, {useCallback, useMemo} from 'react';

import {ButtonProps} from '../../../client/core';
import Icon from '../Icon';

export default function Button({title, icon, onClick, ...props}: ButtonProps) {
  const polarisIcon = useMemo(() => icon && <Icon {...icon} />, [icon]);
  const polarisOnClick = useCallback(() => onClick && onClick(), [onClick]);
  return (
    <PolarisButton {...props} icon={polarisIcon} onClick={polarisOnClick}>
      {title}
    </PolarisButton>
  );
}
