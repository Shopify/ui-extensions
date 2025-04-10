import type {OrderedListProps as BaseOrderedListProps} from '@shopify/ui-api-design/dist/components/OrderedList';

export interface OrderedListProps extends BaseOrderedListProps {}

export interface OrderedListItem
  extends OrderedListProps,
    Omit<HTMLElement, 'id'> {}

declare global {
  interface HTMLElementTagNameMap {
    's-ordered-list': OrderedListItem;
  }
}
