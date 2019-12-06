import React, {useState} from 'react';
import {TextField as PolarisTextField, TextFieldProps} from '@shopify/polaris';

type ScarletTextFieldProps = {
  onValidate?: (value: string) => Promise<boolean>;
};

type CombinedProps = ScarletTextFieldProps & TextFieldProps;

export default function TextField({
  value,
  onChange = () => {},
  onValidate,
  ...props
}: CombinedProps) {
  const [error, setError] = useState('');

  return (
    <PolarisTextField
      {...props}
      value={value}
      error={error}
      onChange={(newValue, id) => {
        if (onValidate) {
          onValidate(newValue).then(valid => (valid ? setError('') : setError('Invalid input')));
        }
        onChange(newValue, id);
      }}
    />
  );
}
