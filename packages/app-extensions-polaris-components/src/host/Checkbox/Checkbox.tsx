import React from 'react';
import {Checkbox as PolarisCheckbox, CheckboxProps} from '@shopify/polaris';

type ScarletCheckboxProps = {
  value: boolean;
};

type CombinedProps = ScarletCheckboxProps & CheckboxProps;

export default function Checkbox({value, ...props}: CombinedProps) {
  return (
    <div>
      <PolarisCheckbox checked={value} {...props} />
    </div>
  );
}
