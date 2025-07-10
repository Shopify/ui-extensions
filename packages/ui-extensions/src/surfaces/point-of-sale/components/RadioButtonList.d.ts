/** VERSION: 0.0.0 **/

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  CallbackEvent,
  CallbackEventListener,
  PreactBaseElementPropsWithChildren,
  PreactCustomElement,
  GlobalProps,
} from './shared';

/**
 * A radio button list lets merchants select from a given set of options.
 */
export interface RadioButtonListProps extends GlobalProps {
  /**
   * The items to display in the radio button list.
   */
  items: string[];
  /**
   * Callback executed when an item is selected.
   */
  onItemSelected?: (item: string) => void;
  /**
   * The initially selected item.
   */
  initialSelectedItem?: string;
  /**
   * The initial offset to show the selected item.
   */
  initialOffsetToShowSelectedItem?: number;
}

declare class RadioButtonList
  extends PreactCustomElement
  implements RadioButtonListProps
{
  accessor items: RadioButtonListProps['items'];
  accessor onitemselected: CallbackEventListener<typeof tagName> | null;
  accessor initialSelectedItem: RadioButtonListProps['initialSelectedItem'];
  accessor initialOffsetToShowSelectedItem: RadioButtonListProps['initialOffsetToShowSelectedItem'];
  accessor id?: string;
  constructor();
}

declare global {
  interface HTMLElementTagNameMap {
    [tagName]: RadioButtonList;
  }
}

declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: RadioButtonListJSXProps &
        PreactBaseElementPropsWithChildren<RadioButtonList>;
    }
  }
}

declare const tagName = 's-radio-button-list';

export interface RadioButtonListJSXProps
  extends Partial<Omit<RadioButtonListProps, 'items'>> {
  // items is required
  items: string[];
  onItemSelected?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}

export {RadioButtonList};
export type {RadioButtonListJSXProps};
