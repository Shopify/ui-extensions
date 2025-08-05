/* VERSION: latest */
/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-namespace */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  TextFieldProps,
  Key,
  Ref,
  ComponentChildren,
} from './components-shared.d.ts';

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
type CallbackEvent<
  TTagName extends keyof HTMLElementTagNameMap,
  TEvent extends Event = Event,
> = TEvent & {
  currentTarget: HTMLElementTagNameMap[TTagName];
};

declare const tagName = 's-text-field';
type AlignedProps = Pick<
  TextFieldProps,
  'label' | 'details' | 'value' | 'placeholder'
>;
export interface TextFieldEventProps {
  onInput?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  onFocus?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  onBlur?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  onChange?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}
export interface TextFieldJSXProps extends AlignedProps, TextFieldEventProps {}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: TextFieldJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: BaseElementPropsWithChildren<TextFieldJSXProps>;
    }
  }
}

export {tagName};
export type {TextFieldEventProps, TextFieldJSXProps};
