/* VERSION: latest */
/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-namespace */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  ChoiceListProps,
  ComponentChildren$1,
  Key,
  Ref,
} from './components-shared.d.ts';

type ComponentChildren = ComponentChildren$1;
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
  children?: ComponentChildren$1;
}
type CallbackEvent<
  TTagName extends keyof HTMLElementTagNameMap,
  TEvent extends Event = Event,
> = TEvent & {
  currentTarget: HTMLElementTagNameMap[TTagName];
};

declare const tagName = 's-choice-list';
type AlignedProps = Pick<ChoiceListProps, 'values' | 'multiple'>;
export interface ChoiceListEventProps {
  onChange?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  onInput?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}
export interface ChoiceListJSXProps extends AlignedProps, ChoiceListEventProps {
  children?: ComponentChildren;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: ChoiceListJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: BaseElementPropsWithChildren<ChoiceListJSXProps>;
    }
  }
}

export {tagName};
export type {ChoiceListEventProps, ChoiceListJSXProps};
