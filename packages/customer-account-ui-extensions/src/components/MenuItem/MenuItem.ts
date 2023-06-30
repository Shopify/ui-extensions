import {createRemoteComponent} from '@remote-ui/core';
import {ButtonProps} from '../shared-components';

export interface MenuItemProps extends ButtonProps {
  /**
   * Set a label for nested menu items
   */
  label?: string;
}

export const MenuItem = createRemoteComponent<'MenuItem', MenuItemProps>('MenuItem');
