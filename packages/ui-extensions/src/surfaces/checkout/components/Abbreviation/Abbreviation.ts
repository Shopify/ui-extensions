import type {AbbreviationProps as BaseAbbreviationProps} from '@shopify/ui-api-design';

export interface AbbreviationProps
  extends Pick<BaseAbbreviationProps, 'title'> {}

export interface AbbreviationElement
  extends AbbreviationProps,
    Omit<HTMLElement, 'id' | 'title'> {}

declare global {
  interface HTMLElementTagNameMap {
    's-abbreviation': AbbreviationElement;
  }
}
