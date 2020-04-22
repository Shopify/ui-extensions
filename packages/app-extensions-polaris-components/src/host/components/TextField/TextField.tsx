import React from 'react';
import {TextField as PolarisTextField, Stack} from '@shopify/polaris';

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
  prefix = '',
  ...props
}: TextFieldProps) {
  const [appliedValue, onChange] = useQueuedState(value, onAfterChange);
  const connectedLeft = props.type === 'search' ? <Icon source="searchMinor" /> : undefined;

  return (
    <PolarisTextField
      {...props}
      label={label}
      prefix={
        <Stack>
          {connectedLeft}
          <span>{prefix}</span>
        </Stack>
      }
      value={appliedValue}
      onBlur={onBlur}
      onFocus={onFocus}
      onChange={onChange}
    />
  );
}
