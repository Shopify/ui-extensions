import type {LinkProps as BaseLinkProps} from '@shopify/ui-api-design';

export interface LinkProps
  extends Omit<
    BaseLinkProps,
    'children' | 'download' | 'onBlur' | 'onFocus' | 'target' | 'tone'
  > {
  target?: Extract<BaseLinkProps['target'], 'auto' | '_self' | '_blank'>;

  tone?: Extract<BaseLinkProps['tone'], 'auto' | 'neutral'>;
}

export interface LinkElement
  extends Omit<LinkProps, 'onClick'>,
    Omit<HTMLElement, 'id' | 'lang' | 'onclick'> {
  onclick: LinkProps['onClick'];
}

declare global {
  interface HTMLElementTagNameMap {
    's-link': LinkElement;
  }
}
