import type {OrderedListProps as BaseOrderedListProps} from '@shopify/ui-api-design';

export interface OrderedListProps extends BaseOrderedListProps {}

export interface OrderedListElement
  extends OrderedListProps,
    Omit<HTMLElement, 'id'> {}

declare global {
  interface HTMLElementTagNameMap {
    's-ordered-list': OrderedListElement;
  }
}
