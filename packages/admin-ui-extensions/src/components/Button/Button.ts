import {createRemoteComponent} from '@remote-ui/core';
import type {BaseButtonProps} from '@shopify/ui-extensions';
import {IconProps} from '../Icon';

type RequiredTitleOrIcon =
  | {
      /** Button label text */
      title: string;
      icon?: IconProps;
    }
  | {
      /** Button label text */
      title?: string;
      icon: IconProps;
    };

export type ButtonProps = RequiredTitleOrIcon & BaseButtonProps;

/**
 * Buttons are used primarily for actions, such as “Add”, “Close”, “Cancel”, or “Save”.
 */
export const Button = createRemoteComponent<'Button', ButtonProps>('Button');
