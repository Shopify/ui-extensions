import type {ParagraphProps as BaseParagraphProps} from '@shopify/ui-api-design';

export interface ParagraphProps
  extends Omit<
    BaseParagraphProps,
    'children' | 'fontVariantNumeric' | 'lineClamp' | 'tone'
  > {
  color?: Extract<BaseParagraphProps['color'], 'subdued' | 'base'>;
  tone?: Extract<
    BaseParagraphProps['tone'],
    'auto' | 'info' | 'success' | 'warning' | 'critical' | 'neutral' | 'custom'
  >;
}

export interface ParagraphElement
  extends ParagraphProps,
    Omit<HTMLElement, 'id' | 'dir' | 'lang'> {}

declare global {
  interface HTMLElementTagNameMap {
    's-paragraph': ParagraphElement;
  }
}
