import React, {useCallback} from 'react';
import {ReactPropsFromRemoteComponentType} from '@remote-ui/react';
import {Radio as ArgoRadio} from '@shopify/argo-admin';
import {RadioButton as PolarisRadio} from '@shopify/polaris';

type RadioProps = ReactPropsFromRemoteComponentType<typeof ArgoRadio>;

export default function Radio({
  value,
  onChange,
  id,
  label = '',
  helpText,
  checked,
  name,
}: RadioProps) {
  const polarisOnChange = useCallback(() => onChange?.(value || ''), [onChange, value]);

  return (
    <PolarisRadio
      id={id}
      name={name}
      checked={checked}
      label={label}
      helpText={helpText}
      value={value}
      onChange={polarisOnChange}
    />
  );
}
