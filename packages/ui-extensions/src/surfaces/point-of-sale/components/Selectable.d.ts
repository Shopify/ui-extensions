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
 * The selectable component allows you to wrap any non-interactive UI component to make it selectable.
 */
export interface SelectableProps {
  /**
   * The callback executed when the selectable is pressed.
   */
  onPress?: () => void;
  /**
   * Whether the selectable is disabled.
   */
  disabled?: boolean;
}

declare class Selectable
  extends PreactCustomElement
  implements SelectableProps
{
  accessor onpress: CallbackEventListener<typeof tagName> | null;
  accessor disabled: SelectableProps['disabled'];
  constructor();
}

declare global {
  interface HTMLElementTagNameMap {
    [tagName]: Selectable;
  }
}

declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: SelectableJSXProps &
        PreactBaseElementPropsWithChildren<Selectable>;
    }
  }
}

declare const tagName = 's-selectable';

export interface SelectableJSXProps extends Partial<SelectableProps> {
  onPress?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  id?: string;
}

export {Selectable};
export type {SelectableJSXProps};
