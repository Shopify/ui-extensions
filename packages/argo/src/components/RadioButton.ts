import {createRemoteComponent} from '@shopify/remote-ui-core';

export interface RadioButtonProps {
  label: string;
  helpText?: string;
  checked: boolean;
  id: string;
  name: string;
  onChange: (newValue: string) => void;
}

export const RadioButton = createRemoteComponent<'RadioButton', RadioButtonProps>('RadioButton');
