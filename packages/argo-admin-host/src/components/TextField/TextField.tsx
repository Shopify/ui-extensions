import React, {useCallback} from 'react';
import {TextFieldProps} from '@shopify/argo-admin';
import {TextField as PolarisTextField, Stack} from '@shopify/polaris';

import {useQueuedState} from '../../utilities/useQueuedState';
import Icon from '../Icon';

const noop = () => undefined;

export default function TextField({
  label = '',
  value = '',
  onInput,
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
  const polarisOnClearButtonClick = useCallback(() => {
    /**
     This is a race condition happening when the client sends more than one update to the host in short amount of time. The host (remote-ui) only notifies the latest update to the UI. The `useQueueState` has `useEffect` which doesn't run in this case because latest value is same as previous value. This is most likely happened because of the `useQueueState` hook for TextField only. A temporary workaround is to handle only this specific use case where:
      - TextField doesn't have onInput
      - Client value is empty
      - Host value is not empty
      - Clear button is tapped (touch on trackpad, not click)
    */
    if (!onInput && !value.length && appliedValue.length) {
      polarisOnChange('');
    }
    onClearButtonPress?.();
  }, [onClearButtonPress, onInput, appliedValue, value, polarisOnChange]);

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
