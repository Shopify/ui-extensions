import React, {useState} from "react";
import { Checkbox as PolarisCheckbox } from "@shopify/polaris";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (value: boolean) => void;
  value?: boolean;
}

export default function Checkbox({label, onChange = () => {}, value}: CheckboxProps) {
  const [checked, setChecked] = useState(value)

  return <div>
    <PolarisCheckbox
      checked={checked}
      label={label}
      onChange={(newValue) => {
        setChecked(newValue);
        onChange(newValue);
      }}
    />
  </div>;
}
