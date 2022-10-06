import {createRemoteComponent} from '@remote-ui/core';

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

export interface BaseButtonProps {
  /**
   * The type of button that will be rendered.
   *
   * `primary`: button used for main actions or green-path. Ex: Continue to next step, Discount field
   * `secondary`: button used for secondary actions not blocking user progress. Ex: Download Shop app
   * `plain`: Renders a button that visually looks like a Link
   *  @default 'secondary'
   */
  kind?: 'primary' | 'secondary' | 'plain';
  /**
   *  Specifies the color of the Button. The button will keep the style of the chosen `kind`,
   *  but replace its color according to the appearance.
   *
   * `monochrome`: button will inherit the color of its parent
   * `critical`: button will take inherit the color of the Critical color group (in Checkout)
   *  		 and map to 'destructive' (in Admin/Polaris). Typically used for destructive actions.
   *
   */
  appearance?: 'critical';
  /** Changes the size of the button
   * @default 'base'
   */
  size?: 'base' | 'large';
  /**
   * Whether the button should fill all available inline space.
   * */
  inlineSize?: 'fill';
  /**
   * Replaces content with a loading indicator
   */
  loading?: boolean;
  /**
   * A label that will be announced to buyers using assistive technologies
   */
  accessibilityLabel?: string;
  /**
   * Disables the button, disallowing any interaction
   */
  disabled?: boolean;
  /**
   * Callback when pressed
   */
  onPress?(): void;
}

export type ButtonProps = RequiredTitleOrIcon & BaseButtonProps;

/**
 * Buttons are used primarily for actions, such as “Add”, “Close”, “Cancel”, or “Save”.
 */
export const Button = createRemoteComponent<'Button', ButtonProps>('Button');
