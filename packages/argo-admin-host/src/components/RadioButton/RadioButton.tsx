import React, {useCallback} from 'react';
import {RadioButtonProps} from '@shopify/argo-admin';
import {RadioButton as PolarisRadioButton} from '@shopify/polaris';

export default function RadioButton({label = '', onChange, value, ...props}: RadioButtonProps) {
  const polarisOnChange = useCallback(() => onChange(value), [onChange, value]);

  return <PolarisRadioButton {...props} label={label} value={value} onChange={polarisOnChange} />;
}
