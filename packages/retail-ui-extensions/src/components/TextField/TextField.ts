import {createRemoteComponent} from '@remote-ui/core';

interface Action {
  type: 'action';
  message: string;
  onPress: (value: string) => void;
}

interface Info {
  type: 'info';
  message: string;
  alwaysShow?: boolean;
}

interface Success {
  type: 'success';
  message?: string;
}

interface Password {
  type: 'password';
  onPress: (value: string) => void;
}

export type EmbeddedElementStyle = Action | Info | Success | Password;

export interface TextFieldProps {
  title?: string;
  subtitle?: string;
  isValid?: boolean;
  hint?: string;
  rightElementStyle?: EmbeddedElementStyle;
  errorMessage?: string;
}

export const TextField = createRemoteComponent<'TextField', TextFieldProps>(
  'TextField',
);
