import React, {useCallback} from 'react';
import {TextFieldProps} from '@shopify/argo-admin';
import {TextField as PolarisTextField, Stack} from '@shopify/polaris';

import {useQueuedState} from '../../utilities/useQueuedState';
import Icon from '../Icon';

const noop = () => undefined;

export default function TextField({
  label = '',
  value = '',
  onInput = noop,
  onChange = noop,
  onBlur = noop,
  onFocus = noop,
  prefix = '',
  clearButton,
  error,
  multiline,
  onClearButtonPress,
  placeholder,
  suffix,
  type,
}: TextFieldProps) {
  const [appliedValue, polarisOnChange] = useQueuedState(value, onInput);
  const connectedLeft = type === 'search' ? <Icon source="searchMinor" /> : undefined;
  const polarisOnBlur = useCallback(() => {
    onChange?.(appliedValue);
    onBlur();
  }, [onBlur, onChange, appliedValue]);
  const polarisOnFocus = useCallback(() => onFocus(), [onFocus]);
  const polarisOnClearButtonClick = useCallback(() => onClearButtonPress?.(), [onClearButtonPress]);

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
