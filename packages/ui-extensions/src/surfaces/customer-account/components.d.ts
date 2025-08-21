import {SizeKeyword, IdProps} from './components/shared';
import {
  AvatarProps,
  AvatarElementProps,
  AvatarElement,
  AvatarEvents,
} from './components/Avatar';
import {MenuProps, MenuElement} from './components/Menu';

export interface CustomerAccountActionProps extends IdProps {
  /**
   * Sets the heading of the Action container.
   */
  heading: string;
}

export interface CustomerAccountActionElement
  extends HTMLElement,
    CustomerAccountActionProps {}

declare global {
  interface HTMLElementTagNameMap {
    ['s-customer-account-action']: CustomerAccountActionElement;
  }
}

declare module 'preact' {
  interface BaseProps {
    children?: preact.ComponentChildren;
    slot?: Lowercase<string>;
  }
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace createElement.JSX {
    interface IntrinsicElements {
      ['s-customer-account-action']: BaseProps & CustomerAccountActionProps;
    }
  }
}

export interface ImageGroupProps extends IdProps {
  /**
   * Indicates the total number of items that could be displayed in the image group.
   * It is used to determine the remaining number to show when all the available image slots have been filled.
   */
  totalItems?: number;
}

export interface ImageGroupElement extends HTMLElement, ImageGroupProps {}

declare global {
  interface HTMLElementTagNameMap {
    ['s-image-group']: ImageGroupElement;
  }
}

declare module 'preact' {
  interface BaseProps {
    children?: preact.ComponentChildren;
  }
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace createElement.JSX {
    interface IntrinsicElements {
      ['s-image-group']: BaseProps & ImageGroupProps;
    }
  }
}

export interface PageProps extends IdProps {
  /**
   * The main page heading
   */
  heading?: string;

  /**
   * The text to be used as subheading.
   */
  subheading?: string;
}

export interface PageElement extends HTMLElement, PageProps {}

declare global {
  interface HTMLElementTagNameMap {
    ['s-page']: PageElement;
  }
}

declare module 'preact' {
  interface BaseProps {
    children?: preact.ComponentChildren;
    slot?: Lowercase<string>;
  }
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace createElement.JSX {
    interface IntrinsicElements {
      ['s-page']: BaseProps & PageProps;
    }
  }
}

export type AvatarElementPropsDocs = AvatarElementProps;
export type AvatarPropsDocs = AvatarProps;
export type AvatarElementDocs = AvatarElement;
export type AvatarEventsDocs = AvatarEvents;

declare global {
  interface HTMLElementTagNameMap {
    ['s-avatar']: AvatarElementDocs;
  }
}

declare module 'preact' {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace createElement.JSX {
    interface IntrinsicElements {
      ['s-avatar']: BaseElementPropsWithChildren<AvatarElementDocs> &
        AvatarPropsDocs;
    }
  }
}

export type MenuPropsDocs = MenuProps;
export type MenuElementDocs = MenuElement;

declare global {
  interface HTMLElementTagNameMap {
    ['s-menu']: MenuElementDocs;
  }
}

declare module 'preact' {
  interface BaseProps {
    children?: preact.ComponentChildren;
  }
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace createElement.JSX {
    interface IntrinsicElements {
      ['s-menu']: BaseProps & MenuProps;
    }
  }
}
