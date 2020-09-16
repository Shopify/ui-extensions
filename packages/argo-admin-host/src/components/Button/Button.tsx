import React, {useCallback, useMemo} from 'react';
import {ButtonProps} from '@shopify/argo-admin';
import {Button as PolarisButton} from '@shopify/polaris';

import Icon from '../Icon';

export default function Button({title, icon, onPress, primary, disabled}: ButtonProps) {
  const polarisIcon = useMemo(() => icon && <Icon {...icon} />, [icon]);
  const polarisOnClick = useCallback(() => onPress?.(), [onPress]);
  return (
    <PolarisButton
      primary={primary}
      icon={polarisIcon}
      onClick={polarisOnClick}
      disabled={disabled}
    >
      {title}
    </PolarisButton>
  );
}
