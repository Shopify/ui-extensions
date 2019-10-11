import { ChoiceList as PolarisChoiceList } from "@shopify/polaris";
import React from "react";

interface ChoiceListProps {
  label: string;
  value: string;
  choices: [{
    label: string,
    value: string,
  }];
  onChange: (value: string) => void;
}

export default function ChoiceList({label, onChange, value, choices}: ChoiceListProps) {
  return <PolarisChoiceList
    title={label}
    choices={choices}
    selected={[value]}
    onChange={(selected, _) => onChange(selected[0])}
  />;
}
