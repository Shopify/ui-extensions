import React, {useCallback, useMemo} from 'react';
import {Button as PolarisButton} from '@shopify/polaris';

import {ButtonProps} from '../../../client/core';
import Icon from '../Icon';

export default function Button({title, icon, onClick, primary}: ButtonProps) {
  const polarisIcon = useMemo(() => icon && <Icon {...icon} />, [icon]);
  const polarisOnClick = useCallback(() => onClick?.(), [onClick]);
  return (
    <PolarisButton primary={primary} icon={polarisIcon} onClick={polarisOnClick}>
      {title}
    </PolarisButton>
  );
}
