import {createRemoteComponent} from '@remote-ui/core';

export interface CheckboxProps {
  checked?: boolean;
  onChange?(value: boolean): void | Promise<void>;
}

export const Checkbox = createRemoteComponent<'Checkbox', CheckboxProps>('Checkbox');
