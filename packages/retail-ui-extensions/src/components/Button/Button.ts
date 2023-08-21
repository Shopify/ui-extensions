import {createRemoteComponent} from '@remote-ui/core';
import type {TestableComponentProps} from '../shared';

export type ButtonType = 'primary' | 'basic' | 'destructive' | 'plain';

export interface ButtonProps extends TestableComponentProps {
  title: string;
  type?: ButtonType;
  onPress?: () => void;
  isDisabled?: boolean;
  isLoading?: boolean;
}

export const Button = createRemoteComponent<'Button', ButtonProps>('Button');
