import React, {useCallback} from 'react';
import {CheckboxProps} from '@shopify/argo-admin';
import {Checkbox as PolarisCheckbox} from '@shopify/polaris';

export default function Checkbox({label = '', onChange, checked}: CheckboxProps) {
  const polarisOnChange = useCallback((newChecked: boolean) => onChange?.(newChecked), [onChange]);
  return <PolarisCheckbox checked={checked} label={label} onChange={polarisOnChange} />;
}
