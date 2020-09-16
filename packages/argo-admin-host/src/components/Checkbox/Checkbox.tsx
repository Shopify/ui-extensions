import React, {useCallback} from 'react';
import {ReactPropsFromRemoteComponentType} from '@remote-ui/react';
import {Checkbox as ArgoCheckbox} from '@shopify/argo-admin';
import {Checkbox as PolarisCheckbox} from '@shopify/polaris';

type CheckboxProps = ReactPropsFromRemoteComponentType<typeof ArgoCheckbox>;

export default function Checkbox({children, onChange, checked}: CheckboxProps) {
  const polarisOnChange = useCallback((newChecked: boolean) => onChange?.(newChecked), [onChange]);

  return <PolarisCheckbox checked={checked} label={children} onChange={polarisOnChange} />;
}
