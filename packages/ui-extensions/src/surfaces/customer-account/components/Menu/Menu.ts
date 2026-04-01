import {createRemoteComponent} from '@remote-ui/core';
import type {IdProps} from '../shared';

/**
 * Display a menu with a list of actions.
 * @publicDocs
 */
export interface MenuProps extends IdProps {
  /**
   * A label that describes the purpose of the menu for users of assistive technologies such as screen readers. Use this to provide context about the available actions, such as "Order actions" or "Account settings."
   */
  accessibilityLabel?: string;
  /**
   * Callback that fires when the menu is opened. Use this to perform setup or fetch data when the menu becomes visible.
   */
  onOpen?: () => void;
  /**
   * Callback that fires when the menu is closed. Use this to perform cleanup or reset state when the menu is dismissed.
   */
  onClose?: () => void;
}

export const Menu = createRemoteComponent<'Menu', MenuProps>('Menu');
