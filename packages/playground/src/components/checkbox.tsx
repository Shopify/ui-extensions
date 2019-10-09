import { Checkbox as PolarisCheckbox } from "@shopify/polaris";
import React from "react";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}

export default function Checkbox({label, checked, onChange}: CheckboxProps) {
  return <div>
    <PolarisCheckbox
      checked={checked}
      label={label}
      onChange={onChange}
    />
  </div>;
}
