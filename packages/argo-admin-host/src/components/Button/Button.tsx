import React, {useCallback, useMemo} from 'react';
import {ButtonProps} from '@shopify/argo';
import {Button as PolarisButton} from '@shopify/polaris';

import Icon from '../Icon';

export default function Button({title, icon, onClick, primary, disabled}: ButtonProps) {
  const polarisIcon = useMemo(() => icon && <Icon {...icon} />, [icon]);
  const polarisOnClick = useCallback(() => onClick?.(), [onClick]);
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
