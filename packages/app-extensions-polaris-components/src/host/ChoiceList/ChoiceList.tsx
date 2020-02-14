import {ChoiceList as PolarisChoiceList, ChoiceListProps} from '@shopify/polaris';
import React from 'react';

type ScarletChoiceListProps = {
  label: string;
  value: string;
  onChange: (string) => void;
};

type CombinedProps = ChoiceListProps & ScarletChoiceListProps;

export default function ChoiceList({label, onChange, value, ...props}: CombinedProps) {
  return (
    <PolarisChoiceList
      title={label}
      selected={value}
      {...props}
      onChange={selected => {
        onChange(selected);
      }}
    />
  );
}
