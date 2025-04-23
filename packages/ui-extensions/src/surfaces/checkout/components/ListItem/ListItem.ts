import type {ListItemProps as BaseListItemProps} from '@shopify/ui-api-design';

export interface ListItemProps extends Omit<BaseListItemProps, 'children'> {}

export interface ListItem extends ListItemProps, Omit<HTMLElement, 'id'> {}

declare global {
  interface HTMLElementTagNameMap {
    's-list-item': ListItem;
  }
}
