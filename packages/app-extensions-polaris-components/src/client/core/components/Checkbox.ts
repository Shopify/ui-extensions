import {createRemoteComponent} from '@shopify/remote-ui-core';

export interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange(value: boolean): void | Promise<void>;
}

export const Checkbox = createRemoteComponent<'Checkbox', CheckboxProps>('Checkbox');
