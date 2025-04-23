import type {UnorderedListProps as BaseUnorderedListProps} from '@shopify/ui-api-design';

export interface UnorderedListProps extends BaseUnorderedListProps {}

export interface UnorderedListElement
  extends UnorderedListProps,
    Omit<HTMLElement, 'id'> {}

declare global {
  interface HTMLElementTagNameMap {
    's-unordered-list': UnorderedListElement;
  }
}
