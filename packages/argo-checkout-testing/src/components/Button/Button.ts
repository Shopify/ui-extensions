import {createRemoteComponent} from '../../utilities';

export interface ButtonProps {
  type?: 'button' | 'submit';
  disabled?: boolean;
  url?: string;
  subdued?: boolean;
  plain?: boolean;
  loading?: boolean;
  onPress?(): void;
}

export const Button = createRemoteComponent<'Button', ButtonProps>('Button');
