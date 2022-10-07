import {createRemoteComponent} from '@remote-ui/core';

export interface ButtonProps {
  /**
   * A callback that is run after the button is pressed.
   */
  onPress?(): void;
}

export const Button = createRemoteComponent<'Button', ButtonProps>('Button');
