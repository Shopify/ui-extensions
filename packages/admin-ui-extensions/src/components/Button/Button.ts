import {createRemoteComponent} from '@remote-ui/core';
import type {BaseButtonProps} from '@shopify/ui-extensions';

export interface ButtonProps extends BaseButtonProps {}

/**
 * Buttons are used primarily for actions, such as “Add”, “Close”, “Cancel”, or “Save”.
 */
export const Button = createRemoteComponent<'Button', ButtonProps>('Button');
