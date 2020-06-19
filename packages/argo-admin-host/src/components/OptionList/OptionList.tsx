import React, {useCallback} from 'react';
import {OptionListProps} from '@shopify/argo-admin';
import {OptionList as PolarisOptionList} from '@shopify/polaris';

export default function OptionList({
  allowMultiple,
  onChange,
  options,
  selected,
  title,
}: OptionListProps) {
  const polarisOnChange = useCallback((newSelected: string[]) => onChange?.(newSelected), [
    onChange,
  ]);
  return (
    <PolarisOptionList
      title={title}
      selected={selected}
      onChange={polarisOnChange}
      allowMultiple={allowMultiple}
      options={options}
    />
  );
}
