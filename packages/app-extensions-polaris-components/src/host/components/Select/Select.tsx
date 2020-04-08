import React, {useCallback} from 'react';
import {Select as PolarisSelect} from '@shopify/polaris';

import {SelectProps} from '../../../client/core';

export default function Select({label = '', onChange, ...props}: SelectProps) {
  const polarisOnChange = useCallback(selected => onChange(selected), [onChange]);
  return <PolarisSelect {...props} label={label} onChange={polarisOnChange} />;
}
