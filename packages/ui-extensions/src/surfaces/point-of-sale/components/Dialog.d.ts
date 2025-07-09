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

export type DialogType = 'basic' | 'error';

/**
 * A dialog is a high-priority, intentionally disruptive message that requires action from the merchant before they can continue using POS.
 */
export interface DialogProps {
  /**
   * The type of dialog to display.
   */
  type?: DialogType;
  /**
   * The title of the dialog.
   */
  title: string;
  /**
   * The main content of the dialog.
   */
  content: string;
  /**
   * The text for the primary action button.
   */
  actionText: string;
  /**
   * The callback executed when the primary action is pressed.
   */
  onAction: () => void;
  /**
   * The text for the secondary action button.
   */
  secondaryActionText?: string;
  /**
   * The callback executed when the secondary action is pressed.
   */
  onSecondaryAction?: () => void;
  /**
   * Whether the dialog is visible.
   */
  isVisible: boolean;
}

declare class Dialog extends PreactCustomElement implements DialogProps {
  accessor type: DialogProps['type'];
  accessor title: DialogProps['title'];
  accessor content: DialogProps['content'];
  accessor actionText: DialogProps['actionText'];
  accessor onaction: CallbackEventListener<typeof tagName> | null;
  accessor secondaryActionText: DialogProps['secondaryActionText'];
  accessor onsecondaryaction: CallbackEventListener<typeof tagName> | null;
  accessor isVisible: DialogProps['isVisible'];
  constructor();
}

declare global {
  interface HTMLElementTagNameMap {
    [tagName]: Dialog;
  }
}

declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: DialogJSXProps & PreactBaseElementPropsWithChildren<Dialog>;
    }
  }
}

declare const tagName = 's-dialog';

export interface DialogJSXProps
  extends Partial<
    Omit<DialogProps, 'title' | 'content' | 'actionText' | 'isVisible'>
  > {
  // Required props
  title: string;
  content: string;
  actionText: string;
  isVisible: boolean;
  onAction: ((event: CallbackEvent<typeof tagName>) => void) | null;
  onSecondaryAction?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  id?: string;
}

export {Dialog};
export type {DialogJSXProps};
