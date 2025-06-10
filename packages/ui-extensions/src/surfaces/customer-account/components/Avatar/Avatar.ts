/* eslint-disable @typescript-eslint/triple-slash-reference */
/* eslint-disable spaced-comment */
/* eslint-disable @typescript-eslint/no-namespace */
/// <reference types="preact" />
import {createRemoteComponent} from '@remote-ui/core';
import {Size} from '../../../checkout';
import type {IdProps, BaseElementPropsWithChildren} from '../shared';

export interface AvatarProps extends IdProps {
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
    's-avatar': AvatarElement;
  }
}

declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      's-avatar': AvatarProps & BaseElementPropsWithChildren<AvatarElement>;
    }
  }
}

export const Avatar = createRemoteComponent<'Avatar', AvatarProps>('Avatar');
