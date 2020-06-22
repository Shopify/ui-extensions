import {createRemoteComponent} from '@remote-ui/core';

export interface TextFieldProps {
  label: string;
  value?: string;
  onChange?(value: string): void;
}

export const TextField = createRemoteComponent<'TextField', TextFieldProps>(
  'TextField',
);
