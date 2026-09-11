/** VERSION: undefined **/
/* eslint-disable import-x/extensions */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable line-comment-position */
/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable no-var */
/* eslint-disable import-x/namespace */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {Key, Ref, ComponentChild} from './components-shared.d.ts';

export type ComponentChildren = any;
/**
 * Used when an element does not have children.
 */
export interface BaseElementProps<TClass = HTMLElement> {
  key?: Key;
  ref?: Ref<TClass>;
  slot?: Lowercase<string>;
}
/**
 * Used when an element has children.
 */
export interface BaseElementPropsWithChildren<TClass = HTMLElement>
  extends BaseElementProps<TClass> {
  children?: ComponentChildren;
}
export type IntrinsicElementProps<T> = T &
  BaseElementPropsWithChildren<T & HTMLElement>;
export type HtmlElementTagNameProps<T> = T & HTMLElement;
export type ElementForTag<T extends string> =
  T extends keyof HTMLElementTagNameMap
    ? HTMLElementTagNameMap[T]
    : HTMLElement;
export interface CallbackEvent<T extends string> {
  currentTarget: ElementForTag<T>;
  bubbles?: boolean;
  cancelable?: boolean;
  composed?: boolean;
  detail?: any;
  eventPhase: number;
  target: ElementForTag<T> | null;
}

declare const tagName = 's-pos-list';
export type POSListImageDisplayStrategy = 'auto' | 'always' | 'never';
export type POSListRowSubtitle =
  | string
  | {
      /** The subtitle text. */
      content: string;
      /**
       * The semantic meaning of the subtitle, as on `s-text`.
       *
       * @default 'auto'
       */
      tone?:
        | 'auto'
        | 'neutral'
        | 'info'
        | 'success'
        | 'warning'
        | 'critical'
        | 'caution';
      /**
       * The emphasis of the subtitle, as on `s-text`. A value other than `base` overrides `tone`.
       *
       * @default 'base'
       */
      color?: 'base' | 'strong' | 'subdued';
    };
export type POSListBadge = {
  /** The badge text. */
  text: string;
  /**
   * The semantic meaning of the badge, as on `s-badge`.
   *
   * @default 'auto'
   */
  tone?:
    | 'auto'
    | 'neutral'
    | 'info'
    | 'success'
    | 'warning'
    | 'critical'
    | 'caution';
};
export type POSListRowImage = {
  /** The URL of the image displayed at the start of the row. */
  src?: string;
  /** A numeric badge displayed over the image. */
  badge?: number;
};
export type POSListToggleSwitch = {
  /**
   * The current state of the toggle switch.
   *
   * @default false
   */
  checked?: boolean;
  /**
   * Whether the toggle switch is disabled.
   *
   * A disabled toggle switch also blocks activation of its row, so the row doesn't fire `rowclick`.
   *
   * @default false
   */
  disabled?: boolean;
};
export type POSListRowStart = {
  /** The primary text for the row. */
  label: string;
  /** Up to three lines of supporting text displayed below the label. */
  subtitles?: [POSListRowSubtitle, POSListRowSubtitle?, POSListRowSubtitle?];
  /** Status or category badges displayed with the row content. */
  badges?: POSListBadge[];
  /** The image displayed at the start of the row. */
  image?: POSListRowImage;
};
export type POSListRowEnd = {
  /** Supporting text displayed at the end of the row. */
  label?: string;
  /**
   * Whether to display a chevron at the end of the row.
   *
   * @default false
   */
  showChevron?: boolean;
  /**
   * A toggle switch displayed at the end of the row.
   *
   * When provided, the toggle switch replaces `label` and `showChevron`.
   */
  toggleSwitch?: POSListToggleSwitch;
};
/**
 * The event fired when a row is activated. `detail.id` is the `id` of the activated row.
 * Errors thrown or promises rejected in the listener stay in the extension; POS does not report them.
 */
export type POSListRowClickEvent = CallbackEvent<typeof tagName> & {
  detail: {id: string};
};
export type POSListRow = {
  /** A unique identifier for the row. */
  id: string;
  /** The primary content displayed at the start of the row. */
  start: POSListRowStart;
  /**
   * What the row is.
   *
   * - `auto`: A button when the list handles `rowclick`, otherwise static text.
   * - `text`: Static content that can't be activated.
   * - `button`: Activating the row fires `rowclick`.
   *
   * @default 'auto'
   */
  type?: 'auto' | 'text' | 'button';
  /** Optional content displayed at the end of the row. */
  end?: POSListRowEnd;
};
/**
 * Displays structured rows with text, badges, images, and optional trailing content.
 *
 * @publicDocs
 */
export interface POSListJSXProps {
  /** A unique identifier for the element. */
  id?: string;
  /**
   * The rows displayed in the list.
   *
   * @default []
   */
  rows?: POSListRow[];
  /**
   * Controls whether rows reserve space for images.
   *
   * - `auto`: Displays an image only on rows that include an image source; other rows reserve no space.
   * - `always`: Displays images or placeholders for every row.
   * - `never`: Displays rows without images or image placeholders.
   *
   * @default 'auto'
   */
  imageDisplayStrategy?: POSListImageDisplayStrategy;
  /**
   * Whether additional rows are being loaded.
   *
   * @default false
   */
  loadingMore?: boolean;
  /** Callback when a row is activated. `event.detail.id` identifies the row. */
  onRowClick?: ((event: POSListRowClickEvent) => void) | null;
  /** Callback when more rows should be loaded. */
  onLoadMore?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /** Content displayed before the rows as part of the list's scrollable content. */
  header?: ComponentChild;
}
export type ElementProps = Omit<POSListJSXProps, 'header'>;
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: HtmlElementTagNameProps<ElementProps>;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: IntrinsicElementProps<ElementProps>;
    }
  }
}

export {tagName};
export type {
  ElementProps,
  POSListBadge,
  POSListImageDisplayStrategy,
  POSListJSXProps,
  POSListRow,
  POSListRowClickEvent,
  POSListRowEnd,
  POSListRowImage,
  POSListRowStart,
  POSListRowSubtitle,
  POSListToggleSwitch,
};
