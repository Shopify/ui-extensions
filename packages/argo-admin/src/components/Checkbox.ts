import {createRemoteComponent} from '@remote-ui/core';

export interface CheckboxProps {
  label?: string;
  checked?: boolean;
  value?: boolean;
  onChange?(value: boolean): void | Promise<void>;
}

export const Checkbox = createRemoteComponent<'Checkbox', CheckboxProps>(
  'Checkbox',
);
