import React, {useState} from 'react';
import {Checkbox as PolarisCheckbox, CheckboxProps} from '@shopify/polaris';

type ScarletCheckboxProps = {
  value: boolean;
};

type CombinedProps = ScarletCheckboxProps & CheckboxProps;

export default function Checkbox({label, onChange = () => {}, value}: CombinedProps) {
  const [checked, setChecked] = useState(Boolean(value));

  return (
    <div>
      <PolarisCheckbox
        checked={checked}
        label={label}
        onChange={(newValue, id) => {
          setChecked(newValue);
          onChange(newValue, id);
        }}
      />
    </div>
  );
}
