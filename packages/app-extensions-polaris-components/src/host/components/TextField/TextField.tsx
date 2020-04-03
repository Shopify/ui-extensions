import React from 'react';
import {TextField as PolarisTextField} from '@shopify/polaris';

import {TextFieldProps} from '../../../client/core';
import {useQueuedState} from '../../hooks';
import Icon from '../Icon';

const noop = () => undefined;

export default function TextField({
  label = '',
  value = '',
  onAfterChange = noop,
  onBlur = noop,
  onFocus = noop,
  ...props
}: TextFieldProps) {
  const [appliedValue, onChange] = useQueuedState(value, onAfterChange);
  const connectedLeft = props.type === 'search' ? <Icon source="searchMinor" /> : undefined;

  return (
    <PolarisTextField
      {...props}
      label={label}
      prefix={connectedLeft}
      value={appliedValue}
      onBlur={onBlur}
      onFocus={onFocus}
      onChange={onChange}
    />
  );
}
