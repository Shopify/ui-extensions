import React, {useCallback} from 'react';
import {RadioProps} from '@shopify/argo-admin';
import {RadioButton as PolarisRadio} from '@shopify/polaris';

export default function RadioButton({label = '', onChange, value, ...props}: RadioProps) {
  const polarisOnChange = useCallback(() => onChange(value), [onChange, value]);

  return <PolarisRadio {...props} label={label} onChange={polarisOnChange} />;
}
