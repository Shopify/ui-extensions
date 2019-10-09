import { Select as PolarisSelect } from "@shopify/polaris";
import React from "react";

interface SelectProps {
  label: string;
  value: string;
  options: [{
    label: string,
    value: string,
  }];
  onChange: (value: string) => void;
}

export default function Select({label, onChange, value, options}: SelectProps) {
  return <PolarisSelect
    label={label}
    options={options}
    value={value}
    onChange={(value) => onChange(value)}
  />;
}
