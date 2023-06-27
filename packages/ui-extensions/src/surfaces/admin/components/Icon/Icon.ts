import {createRemoteComponent} from '@remote-ui/core';

export interface IconProps {
  /*
   * A label that describes the purpose or contents of the icon. When set,
   * it will be announced to users using assistive technologies and will
   * provide them with more context.
   */
  accessibilityLabel?: string;

  /*
   * Set the color of the icon.
   *
   * - `inherit` will take the color value from its parent,
   * giving the link a monochrome appearance.
   *
   * @defaultValue 'inherit'
   */
  tone?: 'inherit' | 'critical';

  /** A unique identifier for the icon. */
  id?: string;

  /**
   * Adjusts the size of the icon.
   *
   * @defaultValue 'base'
   */
  size?:
    | 'base'
    /**
     * `fill` will take the space available in the container and keep the icon's proportion.
     */
    | 'fill';

  /*
   * Specifies the name of the icon that will be displayed.
   */
  name: string;
}

export const Icon = createRemoteComponent<'Icon', IconProps>('Icon');
