import React from 'react';
import {TextField as PolarisTextField} from '@shopify/polaris';
import {useQueuedState} from '../../hooks';
import {TextFieldProps} from '../../../client/core';

const noop = () => undefined;

export default function TextField({
  onAfterChange,
  value,
  onBlur = noop,
  onFocus = noop,
  ...props
}: TextFieldProps) {
  const [appliedValue, onChange] = useQueuedState(value, onAfterChange);

  return (
    <PolarisTextField
      {...props}
      onBlur={onBlur}
      onFocus={onFocus}
      value={appliedValue}
      onChange={onChange}
    />
  );
}
