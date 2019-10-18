import { TextField as PolarisTextField } from "@shopify/polaris";
import React, { useState } from "react";

interface TextfieldProps {
  helpText?: string;
  label: string;
  multiline?: boolean;
  value: string;
  onChange: (value: string) => void;
  onValidate?: (value: string) => Promise<boolean>;
  disabled: boolean;
}

export default function Textfield({helpText, label, multiline, value, onChange = () => {}, onValidate, disabled = false}: TextfieldProps) {
  const [error, setError] = useState("");
  const [textValue, setTextValue] = useState("");

  return <PolarisTextField
    helpText={helpText}
    label={label}
    multiline={multiline}
    value={textValue}
    error={error}
    disabled={disabled}
    onChange={(newValue) => {
      if (onValidate) {
        onValidate(newValue).then((valid) => valid ? setError("") : setError("Invalid input"))
      }
      setTextValue(newValue);
      onChange(newValue);
    }}
  />;
}
