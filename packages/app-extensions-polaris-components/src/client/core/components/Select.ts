import {createRemoteComponent} from '@shopify/remote-ui-core';

interface Option {
  label: string;
  value: string;
}

export interface SelectProps {
  label: string;
  options: Option[];
  onChange: (value: string) => void;
  value: string;
}

export const Select = createRemoteComponent<'Select', SelectProps>('Select');
