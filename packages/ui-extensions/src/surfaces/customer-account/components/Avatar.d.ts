import {BaseElementPropsWithChildren, IdProps, SizeKeyword} from './shared';

export type CallbackEventListener<
  TTagName extends keyof HTMLElementTagNameMap,
  TEvent extends Event = Event,
> =
  | (EventListener & {
      (event: CallbackEvent<TTagName, TEvent>): void;
    })
  | null;

export interface AvatarElementProps extends IdProps {
  /**
   * Initials to display in the avatar.
   *
   * Initials will be rendered as a fallback if `src` is not provided, fails to load or does not load quickly.
   */
  initials?: string;

  /**
   * The URL or path to the image.
   */
  src?: string;

  /**
   * Size of the avatar.
   *
   * @default 'base'
   */
  size?: Extract<
    SizeKeyword,
    'small-200' | 'small' | 'base' | 'large' | 'large-200'
  >;

  /**
   * An alternative text description that describe the image for the reader
   * to understand what it is about or identify the user the avatar belongs to.
   */
  alt?: string;
}

export interface AvatarElementEvents {
  /**
   * Invoked when load of provided image completes successfully.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload
   */
  onLoad?(event: Event): void;

  /**
   * Invoked on load error of provided image.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror
   */
  onError?(event: Event): void;
}

export interface AvatarElement
  extends AvatarElementProps,
    Omit<HTMLElement, 'id'> {
  onload: AvatarElementEvents['onLoad'];
  onerror: AvatarElementEvents['onError'];
}

export interface AvatarEvents {
  /**
   * Callback when the image loads successfully.
   */
  load?: ((event: CallbackEventListener<typeof tagName>) => void) | null;

  /**
   * Callback when the image fails to load.
   */
  error?: ((event: CallbackEventListener<typeof tagName>) => void) | null;
}

export type AvatarProps = AvatarElementProps & AvatarElementEvents;

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
