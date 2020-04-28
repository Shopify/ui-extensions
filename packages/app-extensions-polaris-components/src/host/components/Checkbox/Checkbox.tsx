import React, {useCallback} from 'react';
import {Checkbox as PolarisCheckbox} from '@shopify/polaris';

import {CheckboxProps} from '../../../client/core';

export default function Checkbox({label = '', onChange, checked}: CheckboxProps) {
  const polarisOnChange = useCallback((newChecked: boolean) => onChange?.(newChecked), [onChange]);
  return <PolarisCheckbox checked={checked} label={label} onChange={polarisOnChange} />;
}
