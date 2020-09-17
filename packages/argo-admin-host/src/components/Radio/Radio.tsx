import React, {useCallback} from 'react';
import {ReactPropsFromRemoteComponentType} from '@remote-ui/react';
import {Radio as ArgoRadio} from '@shopify/argo-admin';
import {RadioButton as PolarisRadio} from '@shopify/polaris';

type RadioProps = ReactPropsFromRemoteComponentType<typeof ArgoRadio>;

export default function Radio({
  value,
  onChange,
  id,
  children,
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
      label={children}
      helpText={helpText}
      value={value}
      onChange={polarisOnChange}
    />
  );
}
