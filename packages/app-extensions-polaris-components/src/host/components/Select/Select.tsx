import React, {useCallback} from 'react';
import {Select as PolarisSelect} from '@shopify/polaris';

import {SelectProps} from '../../../client/core';

export default function Select({label = '', labelInline, options, onChange, value}: SelectProps) {
  const polarisOnChange = useCallback(selected => onChange(selected), [onChange]);
  return (
    <PolarisSelect
      label={label}
      labelInline={labelInline}
      options={options}
      onChange={polarisOnChange}
      value={value}
    />
  );
}
