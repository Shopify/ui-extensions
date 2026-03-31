import {createRemoteComponent} from '@remote-ui/core';
import {Size} from '../../../checkout';
import type {IdProps} from '../shared';

export interface AvatarProps extends IdProps {
  /**
   * The initials to display in the avatar. Used as a text fallback when no
   * image is available or while the image is loading.
   */
  initials?: string;

  /**
   * The URL or path to the avatar image. Supports remote URLs and local
   * file resources. Initials are rendered as a fallback if `src` is not
   * provided, fails to load, or does not load quickly.
   */
  src?: string;

  /**
   * A callback that fires when the avatar image finishes loading
   * successfully. Use this to trigger UI updates that depend on the
   * image being ready (for example, removing a loading skeleton).
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload
   */
  onLoad?(): void;

  /**
   * A callback that fires when the avatar image fails to load (for
   * example, due to a broken URL or network error). Use this to show
   * a fallback or error state.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror
   */
  onError?(): void;

  /**
   * The size of the avatar.
   *
   * @defaultValue 'base'
   */
  size?: Extract<Size, 'base' | 'large' | 'extraLarge' | 'fill'>;

  /**
   * The alternative text that describes the avatar for assistive technologies.
   * Screen readers announce this text when they encounter the avatar, and
   * it displays as a fallback if the image fails to load.
   *
   * Learn more about [writing effective alternative text](https://ux.shopify.com/considerations-when-writing-alt-text-a9c1985a8204).
   */
  alt?: string;
}

export const Avatar = createRemoteComponent<'Avatar', AvatarProps>('Avatar');
