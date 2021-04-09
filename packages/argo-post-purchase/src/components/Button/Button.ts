import {createRemoteComponent} from '@remote-ui/core';

export interface ButtonProps {
  /** Allows the button to submit a form */
  submit?: boolean;
  /** Destination to link to, renders a Link */
  to?: string;
  /** Renders a visually subdued button */
  subdued?: boolean;
  /** Renders a button that visually looks like a Link */
  plain?: boolean;
  /** Replaces content with a loading indicator */
  loading?: boolean;
  /** Accessible label for the loading indicator when user prefers reduced motion */
  loadingLabel?: string;
  /** Disables the button, disallowing any interaction */
  disabled?: boolean;
  /** Callback when pressed */
  onPress?(): void;
}

/**
 * Button is used primarily for actions, such as “Continue”, “Apply”, or “Pay”.
 */
export const Button = createRemoteComponent<'Button', ButtonProps>('Button');
