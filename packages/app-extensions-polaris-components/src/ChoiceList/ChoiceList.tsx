import { ChoiceList as PolarisChoiceList, ChoiceListProps} from "@shopify/polaris";
import React from "react";

type ScarletChoiceListProps = {
  label: string;
  value: string;
  onChange: (string) => void;
}

type CombinedProps = ChoiceListProps & ScarletChoiceListProps;

export default function ChoiceList({label, onChange, value, choices}: CombinedProps) {
  return <PolarisChoiceList
    title={label}
    choices={choices}
    selected={[value]}
    onChange={(selected) => {
      onChange(selected)
    }}
  />;
}
