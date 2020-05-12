import {createRemoteComponent} from '../../utilities';

export interface ButtonProps {
  type?: 'button' | 'submit';
  url?: string;
  loading?: boolean;
  disabled?: boolean;
  onPress?(): void;
}

export const Button = createRemoteComponent<'Button', ButtonProps>('Button');
