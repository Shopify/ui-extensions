import {createRemoteComponent} from '@remote-ui/core';

export type ButtonType = 'primary' | 'basic' | 'destructive' | 'plain';

export interface ButtonProps {
  title: string;
  type?: ButtonType;
  onPress?: () => void;
  isDisabled?: boolean;
  isLoading?: boolean;
}

export const Button = createRemoteComponent<'Button', ButtonProps>('Button');
