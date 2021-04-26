import {createRemoteComponent} from '@remote-ui/core';

import {IconProps} from './Icon';

type RequiredTitleOrIcon =
  | {
      title: string;
      icon?: IconProps;
    }
  | {
      title?: string;
      icon: IconProps;
    };

export type ButtonProps = RequiredTitleOrIcon & {
  primary?: boolean;
  onPress?(): void;
  disabled?: boolean;
};

export const Button = createRemoteComponent<'Button', ButtonProps>('Button');
