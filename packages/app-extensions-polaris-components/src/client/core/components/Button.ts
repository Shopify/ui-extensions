import {createRemoteComponent} from '@shopify/remote-ui-core';

import {IconProps} from './Icon';

export interface ButtonProps {
  title: string;
  primary?: boolean;
  icon?: IconProps;
  onClick?(): void;
}

export const Button = createRemoteComponent<'Button', ButtonProps>('Button');
