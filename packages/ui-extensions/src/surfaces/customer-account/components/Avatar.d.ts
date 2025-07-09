import {BaseElementPropsWithChildren, Size, GlobalProps} from './shared';

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
