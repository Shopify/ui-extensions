import React, {useRef, useCallback} from 'react';
import {ReactPropsFromRemoteComponentType} from '@remote-ui/react';
import {Radio as ArgoRadio} from '@shopify/argo-admin';
import {RadioButton as PolarisRadio} from '@shopify/polaris';

let nextUniqueId = 0;

type RadioProps = ReactPropsFromRemoteComponentType<typeof ArgoRadio>;

export default function Radio({value, onChange, id, children, ...props}: RadioProps) {
  const polarisOnChange = useCallback(() => onChange(value), [onChange, value]);
  const {current: uniqueId} = useRef(`argo-radio-${nextUniqueId++}`);

  return (
    <PolarisRadio
      {...props}
      id={id || uniqueId}
      label={children}
      value={value}
      onChange={polarisOnChange}
    />
  );
}
