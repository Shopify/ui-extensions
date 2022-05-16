import {createRemoteComponent} from '@remote-ui/core';

interface ActionProps {
  type: 'action';
  message: string;
  onPress: (value: string) => void;
}

interface InfoProps {
  type: 'info';
  message: string;
  alwaysShow?: boolean;
}

interface SuccessProps {
  type: 'success';
  message?: string;
}

interface PasswordProps {
  type: 'password';
  onPress: (value: string) => void;
}

type EmbeddedElementProps =
  | ActionProps
  | InfoProps
  | SuccessProps
  | PasswordProps;

export interface TextFieldProps {
  title?: string;
  subtitle?: string;
  initialValue?: string;
  hint?: string;
  isValid?: boolean;
  rightElementStyle?: EmbeddedElementProps;
  errorMessage?: string;
  onChangeText?: (value: string) => void;
}

export const TextField = createRemoteComponent<'TextField', TextFieldProps>(
  'TextField',
);
