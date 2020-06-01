import {createRemoteComponent} from '../utilities';

export interface CheckboxProps {
  label?: string;
  checked?: boolean;
  onChange?(value: boolean): void | Promise<void>;
}

export const Checkbox = createRemoteComponent<'Checkbox', CheckboxProps>('Checkbox');
