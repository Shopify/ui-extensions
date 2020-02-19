import React from 'react';
import {TextField as PolarisTextField} from '@shopify/polaris';
import {useQueuedState} from '../../hooks';

interface TextFieldProps {
  label: string;
  value: string;
  placeHolder?: string;
  helpText?: string;
  multiline?: boolean | number;

  onBlur?: () => void;
  onFocus?: () => void;
  onAfterChange: (value: string) => void;
}

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
