/** VERSION: 1.64.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  AvatarProps$1,
  PreactCustomElement,
  RenderImpl,
} from './shared.d.ts';

export type RequiredAvatarProps = Required<AvatarProps$1>;
/**
 * The properties for the avatar component. An avatar displays a user or entity image with fallback initials when the image isn't available. Properties include `src` for the image URL, `initials` for the fallback text, `alt` for accessibility text, and `size` for controlling the avatar dimensions.
 * @publicDocs
 */
export interface AvatarProps
  extends Required<Pick<AvatarProps$1, 'initials' | 'src' | 'alt' | 'size'>> {
  /**
   * The initials to display when no image is provided or if the image fails to load. This typically includes the first letter of a user's first and last name (for example, `'JD'` for John Doe).
   */
  initials: RequiredAvatarProps['initials'];
  /**
   * The URL of the avatar image to display. You can provide an absolute or relative URL pointing to the image file.
   */
  src: RequiredAvatarProps['src'];
  /**
   * Alternative text that describes the avatar for screen readers. This text should identify who or what the avatar represents.
   */
  alt: RequiredAvatarProps['alt'];
  /**
   * The size of the avatar. Choose from `'small-200'`, `'small'`, `'base'`, `'large'`, or `'large-200'` to control the avatar dimensions.
   *
   * @default 'base'
   */
  size: Extract<
    AvatarProps$1['size'],
    'small-200' | 'small' | 'base' | 'large' | 'large-200'
  >;
}

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
}

/**
 * An event object with a strongly-typed `currentTarget` property that references the specific HTML element that triggered the event.
 *
 * This type extends the standard DOM `Event` interface and ensures type safety when accessing the element that fired the event.
 */
export type CallbackEvent<T extends keyof HTMLElementTagNameMap> = Event & {
  currentTarget: HTMLElementTagNameMap[T];
};
/**
 * A function that handles events from UI components.
 *
 * This type represents an event listener callback that receives a `CallbackEvent` with a strongly-typed `currentTarget`.
 * Use this for component event handlers like `click`, `focus`, `blur`, and other DOM events.
 *
 * @example
 * const handleClick: CallbackEventListener<'button'> = (event) => {
 *   console.log('Button clicked:', event.currentTarget);
 * };
 */
export type CallbackEventListener<T extends keyof HTMLElementTagNameMap> =
  | (EventListener & {
      (event: CallbackEvent<T>): void;
    })
  | null;
/** Used when an element does not have children. */
export interface PreactBaseElementProps<TClass extends HTMLElement> {
  /** Assigns a unique key to this element. */
  key?: preact.Key;
  /** Assigns a ref (generally from `useRef()`) to this element. */
  ref?: preact.Ref<TClass>;
  /** Assigns this element to a parent's slot. */
  slot?: Lowercase<string>;
}

/**
 * An avatar displays a user or entity image with fallback initials when the image isn't available.
 */
declare class Avatar extends PolarisCustomElement implements AvatarProps {
  /**
   * The initials to display when no image is provided or if the image fails to load.
   */
  accessor initials: AvatarProps['initials'];
  /**
   * The URL of the avatar image to display.
   */
  accessor src: AvatarProps['src'];
  /**
   * The size of the avatar.
   */
  accessor size: AvatarProps['size'];
  /**
   * Alternative text that describes the avatar for screen readers.
   */
  accessor alt: AvatarProps['alt'];
  /**
   * A callback that's fired when the avatar image has loaded successfully.
   */
  accessor onload: CallbackEventListener<typeof tagName> | null;
  /**
   * A callback that's fired when the avatar image fails to load.
   */
  accessor onerror: OnErrorEventHandler;
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: Avatar;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: AvatarJSXProps & PreactBaseElementProps<Avatar>;
    }
  }
}

declare const tagName = 's-avatar';
/**
 * The properties for the avatar component when it's used in JSX.
 * @publicDocs
 */
export interface AvatarJSXProps
  extends Partial<AvatarProps>,
    Pick<AvatarProps$1, 'id'> {
  /**
   * A callback that's fired when the avatar image has loaded successfully.
   */
  onLoad?: () => void;
  /**
   * A callback that's fired when the avatar image fails to load.
   */
  onError?: () => void;
}

export {Avatar};
export type {AvatarJSXProps};
