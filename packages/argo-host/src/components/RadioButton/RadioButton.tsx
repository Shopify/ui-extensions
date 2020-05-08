import React, {useCallback} from 'react';
import {RadioButtonProps} from '@shopify/argo/components';
import {RadioButton as PolarisRadioButton} from '@shopify/polaris';

export default function RadioButton({label = '', onChange, ...props}: RadioButtonProps) {
  const polarisOnChange = useCallback((checked, newValue) => onChange(newValue), [onChange]);

  return <PolarisRadioButton {...props} label={label} onChange={polarisOnChange} />;
}
