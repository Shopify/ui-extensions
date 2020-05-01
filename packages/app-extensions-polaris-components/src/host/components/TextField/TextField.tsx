import React, {useCallback} from 'react';
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
  clearButton,
  error,
  multiline,
  onClearButtonClick,
  placeholder,
  suffix,
  type,
}: TextFieldProps) {
  const [appliedValue, polarisOnChange] = useQueuedState(value, onAfterChange);
  const connectedLeft = type === 'search' ? <Icon source="searchMinor" /> : undefined;
  const polarisOnBlur = useCallback(() => onBlur(), [onBlur]);
  const polarisOnFocus = useCallback(() => onFocus(), [onFocus]);
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
      onBlur={polarisOnBlur}
      onFocus={polarisOnFocus}
      onChange={polarisOnChange}
    />
  );
}
