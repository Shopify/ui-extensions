import React, {useCallback} from 'react';
import {TextFieldProps} from '@shopify/argo/components';
import {TextField as PolarisTextField, Stack} from '@shopify/polaris';

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
  clearButton,
  error,
  multiline,
  onClearButtonClick,
  placeholder,
  suffix,
  type,
}: TextFieldProps) {
  const [appliedValue, onChange] = useQueuedState(value, onAfterChange);
  const connectedLeft = type === 'search' ? <Icon source="searchMinor" /> : undefined;
  const polarisOnClearButtonClick = useCallback((id: string) => onClearButtonClick?.(id), [
    onClearButtonClick,
  ]);

  return (
    <PolarisTextField
      clearButton={clearButton}
      error={error}
      multiline={multiline}
      onClearButtonClick={polarisOnClearButtonClick}
      placeholder={placeholder}
      suffix={suffix}
      type={type}
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
