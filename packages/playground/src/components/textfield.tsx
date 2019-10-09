import { TextField as PolarisTextField } from "@shopify/polaris";
import React, { useState } from "react";

interface TextfieldProps {
  helpText?: string;
  label: string;
  multiline?: boolean;
  value: string;
  onChange: (value: string) => void;
  onValidate?: (value: string) => Promise<boolean>;
}

export default function Textfield({helpText, label, multiline, value, onChange, onValidate}: TextfieldProps) {
  const [error, setError] = useState("");

  return <PolarisTextField
    helpText={helpText}
    label={label}
    multiline={multiline}
    value={value}
    error={error}
    onChange={(value) => {
      if (onValidate) {
        onValidate(value).then((valid) => valid ? setError("") : setError("Invalid input"))
      }

      onChange(value)
    }}
  />;
}
