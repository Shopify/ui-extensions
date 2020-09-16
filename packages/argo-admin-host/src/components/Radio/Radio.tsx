import React, {useRef, useCallback} from 'react';
import {RadioProps} from '@shopify/argo-admin';
import {RadioButton as PolarisRadio} from '@shopify/polaris';

let nextUniqueId = 0;

export default function Radio({label = '', value, onChange, id, ...props}: RadioProps) {
  const polarisOnChange = useCallback(() => onChange(value), [onChange, value]);
  const {current: uniqueId} = useRef(`argo-radio-${nextUniqueId++}`);

  return (
    <PolarisRadio
      {...props}
      id={id || uniqueId}
      label={label}
      value={value}
      onChange={polarisOnChange}
    />
  );
}
