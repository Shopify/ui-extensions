import type {TextProps as BaseTextProps} from '@shopify/ui-api-design';

export interface TextProps
  extends Omit<BaseTextProps, 'children' | 'fontVariantNumeric' | 'type'> {
  color?: Extract<BaseTextProps['color'], 'subdued' | 'base'>;
  tone?: Extract<
    BaseTextProps['tone'],
    'auto' | 'neutral' | 'info' | 'success' | 'warning' | 'critical' | 'custom'
  >;
  type?: Extract<
    BaseTextProps['type'],
    | 'address'
    | 'redundant'
    | 'mark'
    | 'emphasis'
    | 'offset'
    | 'small'
    | 'strong'
    | 'generic'
  >;
}

export interface TextElement
  extends TextProps,
    Omit<HTMLElement, 'id' | 'dir' | 'lang'> {}

declare global {
  interface HTMLElementTagNameMap {
    's-text': TextElement;
  }
}
