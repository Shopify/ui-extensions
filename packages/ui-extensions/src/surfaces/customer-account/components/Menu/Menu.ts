/* eslint-disable @typescript-eslint/triple-slash-reference */
/* eslint-disable spaced-comment */
/* eslint-disable @typescript-eslint/no-namespace */
/// <reference types="preact" />
import {createRemoteComponent} from '@remote-ui/core';
import type {IdProps, BaseElementPropsWithChildren} from '../shared';

export interface MenuProps extends IdProps {
  /**
   * A label to describe the purpose of the menu that is announced by screen readers.
   */
  accessibilityLabel?: string;
  /**
   * Callback to run when the Menu is opened
   */
  onOpen?: () => void;
  /**
   * Callback to run when the Menu is closed
   */
  onClose?: () => void;
}

export interface MenuElement extends MenuProps, Omit<HTMLElement, 'id'> {}

declare global {
  interface HTMLElementTagNameMap {
    's-menu': MenuElement;
  }
}

declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      's-menu': MenuProps & BaseElementPropsWithChildren<MenuElement>;
    }
  }
}

export const Menu = createRemoteComponent<'Menu', MenuProps>('Menu');
