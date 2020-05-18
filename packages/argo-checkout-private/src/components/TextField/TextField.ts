import {createRemoteComponent} from '../../utilities';

export interface TextFieldProps {
  label: string;
  value?: string;
  onChange?(): void;
}

export const TextField = createRemoteComponent<'TextField', TextFieldProps>(
  'TextField',
);
