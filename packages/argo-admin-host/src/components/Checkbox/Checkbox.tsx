import React, {useCallback, useMemo} from 'react';
import {ReactPropsFromRemoteComponentType} from '@remote-ui/react';
import {Checkbox as ArgoCheckbox} from '@shopify/argo-admin';
import {Checkbox as PolarisCheckbox} from '@shopify/polaris';

type CheckboxProps = ReactPropsFromRemoteComponentType<typeof ArgoCheckbox>;

export default function Checkbox({label = '', onChange, checked, value}: CheckboxProps) {
  const polarisOnChange = useCallback((newChecked: boolean) => onChange?.(newChecked), [onChange]);
  const polarisChecked = useMemo(() => (typeof checked === 'boolean' ? checked : value), [
    checked,
    value,
  ]);

  return <PolarisCheckbox checked={polarisChecked} label={label} onChange={polarisOnChange} />;
}
