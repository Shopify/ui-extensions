import {createRemoteComponent} from '@remote-ui/core';
import type {IdProps} from '../shared';

export interface MenuProps extends IdProps {
  /**
   * A label to describe the purpose of the menu that is announced by screen readers.
   */
  accessibilityLabel?: string;
}

export const Menu = createRemoteComponent<'Menu', MenuProps>('Menu');
