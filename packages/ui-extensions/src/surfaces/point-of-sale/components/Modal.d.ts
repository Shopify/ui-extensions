/* VERSION: latest */
/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-namespace */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  ModalProps,
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
type CallbackToggleEvent<
  TTagName extends keyof HTMLElementTagNameMap,
  TEvent extends ToggleEvent = ToggleEvent,
> = TEvent & {
  currentTarget: HTMLElementTagNameMap[TTagName];
};

declare const tagName = 's-modal';
type AlignedProps = Pick<ModalProps, 'id'>;
export interface ModalEventProps {
  onHide?: (event: CallbackEvent<typeof tagName>) => void | null;
  onShow?: (event: CallbackEvent<typeof tagName>) => void | null;
  onAfterHide?: (event: CallbackEvent<typeof tagName>) => void | null;
  onAfterShow?: (event: CallbackEvent<typeof tagName>) => void | null;
  onToggle?: (event: CallbackToggleEvent<typeof tagName>) => void | null;
  onAfterToggle?: (event: CallbackToggleEvent<typeof tagName>) => void | null;
}
export interface ModalJSXProps extends AlignedProps, ModalEventProps {
  children?: ComponentChildren;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: ModalJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: BaseElementPropsWithChildren<ModalJSXProps>;
    }
  }
}

export {tagName};
export type {ModalEventProps, ModalJSXProps};
