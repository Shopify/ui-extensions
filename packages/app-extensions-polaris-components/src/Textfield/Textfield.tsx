import React, {useState} from 'react';
import {TextField as PolarisTextField, TextFieldProps} from '@shopify/polaris';

type ScarletTextfieldProps = {
  onValidate?: (value: string) => Promise<boolean>;
};

type CombinedProps = ScarletTextfieldProps & TextFieldProps;

export default function Textfield({
  value,
  onChange = () => {},
  onValidate,
  ...props
}: CombinedProps) {
  const [error, setError] = useState('');
  const [textValue, setTextValue] = useState(value);

  return (
    <PolarisTextField
      {...props}
      value={textValue}
      error={error}
      onChange={(newValue, id) => {
        if (onValidate) {
          onValidate(newValue).then(valid => (valid ? setError('') : setError('Invalid input')));
        }
        setTextValue(newValue);
        onChange(newValue, id);
      }}
    />
  );
}
