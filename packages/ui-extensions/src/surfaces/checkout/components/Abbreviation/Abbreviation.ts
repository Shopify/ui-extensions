import type {AbbreviationProps as BaseAbbreviationProps} from '@shopify/ui-api-design/dist/components/Abbreviation';

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
