import React, {useCallback, useMemo} from 'react';
import {SelectProps} from '@shopify/argo';
import {Select as PolarisSelect} from '@shopify/polaris';

export default function Select({
  error,
  label = '',
  labelInline,
  options,
  onChange,
  onBlur,
  value,
}: SelectProps) {
  const polarisOnChange = useCallback((selected) => onChange(selected), [onChange]);
  const polarisOnBlur = useMemo(() => (onBlur ? () => onBlur() : undefined), [onBlur]);
  return (
    <PolarisSelect
      label={label}
      labelInline={labelInline}
      options={options}
      onChange={polarisOnChange}
      onBlur={polarisOnBlur}
      value={value}
      error={error}
    />
  );
}
