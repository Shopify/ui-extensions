/** VERSION: 0.0.0 **/
/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  CallbackEvent,
  CallbackEventListener,
  PreactBaseElementPropsWithChildren,
  PreactCustomElement,
} from './shared.d.ts';

/**
 * The image configuration for a list row.
 */
export interface ListRowImage {
  /**
   * The source URL or path of the image.
   */
  source?: string;
}

/**
 * The toggle switch configuration for a list row.
 */
export interface ToggleSwitch {
  /**
   * Whether the toggle is on or off.
   */
  value: boolean;
  /**
   * Whether the toggle is disabled.
   */
  disabled?: boolean;
}

/**
 * The subtitle configuration for a list row.
 */
export interface ListRowSubtitle {
  /**
   * The subtitle text content.
   */
  content: string;
  /**
   * The color of the subtitle text.
   */
  color?: string;
}

/**
 * The left side configuration for a list row.
 */
export interface ListRowLeftSide {
  /**
   * The main label text.
   */
  label: string;
  /**
   * The subtitle text(s).
   */
  subtitle?: [ListRowSubtitle, ListRowSubtitle?, ListRowSubtitle?];
  /**
   * The image configuration.
   */
  image?: ListRowImage;
  /**
   * Badge configuration.
   */
  badge?: {
    /**
     * The badge text.
     */
    text: string;
    /**
     * The badge variant.
     */
    variant?: string;
  };
}

/**
 * The right side configuration for a list row.
 */
export interface ListRowRightSide {
  /**
   * The label text.
   */
  label?: string;
  /**
   * Whether to show a chevron.
   */
  showChevron?: boolean;
  /**
   * Toggle switch configuration.
   */
  toggleSwitch?: ToggleSwitch;
}

/**
 * A single row in the list.
 */
export interface ListRow {
  /**
   * Unique identifier for the row.
   */
  id: string;
  /**
   * The left side content of the row.
   */
  leftSide?: ListRowLeftSide;
  /**
   * The right side content of the row.
   */
  rightSide?: ListRowRightSide;
  /**
   * Callback executed when the row is pressed.
   */
  onPress?: () => void;
}

/**
 * The strategy for displaying images in the list.
 */
export type ImageDisplayStrategy = 'always' | 'never' | 'ifPresent';

/**
 * The list is a scrollable component in which the list rows are rendered.
 */
export interface ListProps {
  /**
   * The array of list rows to display.
   */
  data?: ListRow[];
  /**
   * The title displayed above the list.
   */
  title?: string;
  /**
   * Component to display as the list header.
   */
  listHeaderComponent?: any;
  /**
   * Strategy for displaying images.
   */
  imageDisplayStrategy?: ImageDisplayStrategy;
  /**
   * Callback executed when a row is tapped.
   */
  onItemTap?: (row: ListRow) => void;
}

declare class List extends PreactCustomElement implements ListProps {
  accessor data: ListProps['data'];
  accessor title: ListProps['title'];
  accessor listHeaderComponent: ListProps['listHeaderComponent'];
  accessor imageDisplayStrategy: ListProps['imageDisplayStrategy'];
  accessor onitemtap: CallbackEventListener<typeof tagName> | null;
  constructor();
}

declare global {
  interface HTMLElementTagNameMap {
    [tagName]: List;
  }
}

declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: ListJSXProps & PreactBaseElementPropsWithChildren<List>;
    }
  }
}

declare const tagName = 's-list';

export interface ListJSXProps extends Partial<ListProps> {
  onItemTap?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  id?: string;
}

export {List};
export type {
  ListJSXProps,
  ListRow,
  ListRowSubtitle,
  ListRowLeftSide,
  ListRowRightSide,
  ToggleSwitch,
  ImageDisplayStrategy,
};
