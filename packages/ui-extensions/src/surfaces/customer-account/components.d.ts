export interface CustomerAccountActionProps {
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

export interface ImageGroupProps {
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

export interface PageProps {
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

interface GlobalProps {
  /**
   * A unique identifier for the element.
   */
  id?: string;
}

export type Size =
  | 'extraSmall'
  | 'small'
  | 'base'
  | 'large'
  | 'extraLarge'
  | 'fill';
export interface AvatarProps extends GlobalProps {
  /**
   * Initials to display in the avatar.
   */
  initials?: string;

  /**
   * The URL or path to the image.
   *
   * Initials will be rendered as a fallback if `src` is not provided, fails to load or does not load quickly.
   */
  src?: string;

  /**
   * Invoked when load of provided image completes successfully.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload
   */
  onLoad?(): void;

  /**
   * Invoked on load error of provided image.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror
   */
  onError?(): void;

  /**
   * Size of the avatar.
   *
   * @default 'base'
   */
  size?: Extract<Size, 'base' | 'large' | 'extraLarge' | 'fill'>;

  /**
   * An alternative text description that describe the image for the reader
   * to understand what it is about or identify the user the avatar belongs to.
   */
  alt?: string;
}

export interface AvatarElement extends AvatarProps, Omit<HTMLElement, 'id'> {}

declare global {
  interface HTMLElementTagNameMap {
    ['s-avatar']: AvatarElement;
  }
}

declare module 'preact' {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace createElement.JSX {
    interface IntrinsicElements {
      ['s-avatar']: BaseElementPropsWithChildren<AvatarElement> & AvatarProps;
    }
  }
}
