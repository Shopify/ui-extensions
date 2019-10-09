import { Checkbox as PolarisCheckbox } from "@shopify/polaris";
import React from "react";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (value: boolean) => void;
  value?: boolean;
}

export default function Checkbox({label, onChange = () => {}, value}: CheckboxProps) {
  return <div>
    <PolarisCheckbox
      checked={value}
      label={label}
      onChange={(value) => {
        onChange(value);
      }}
    />
  </div>;
}
