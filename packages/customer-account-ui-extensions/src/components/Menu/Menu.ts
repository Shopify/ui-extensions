import {createRemoteComponent} from '@remote-ui/core';

export interface MenuProps {
  /**
   * Set a label for nested menu items
   */
  label?: string;
}

export const Menu = createRemoteComponent<'Menu', MenuProps>('Menu');
