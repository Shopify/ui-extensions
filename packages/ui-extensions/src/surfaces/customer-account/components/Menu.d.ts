import {BaseElementPropsWithChildren, IdProps} from './shared';

export interface MenuProps extends IdProps {
  /**
   * A label to describe the purpose of the menu that is announced by screen readers.
   */
  accessibilityLabel?: string;
}

export interface MenuElement extends MenuProps, Omit<HTMLElement, 'id'> {}

declare global {
  interface HTMLElementTagNameMap {
    ['s-menu']: MenuElement;
  }
}

declare module 'preact' {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace createElement.JSX {
    interface IntrinsicElements {
      ['s-menu']: BaseElementPropsWithChildren<MenuElement> & MenuProps;
    }
  }
}
