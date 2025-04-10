import type {ParagraphProps as BaseParagraphProps} from '@shopify/ui-api-design/dist/components/Paragraph';

export interface ParagraphProps
  extends Omit<
    BaseParagraphProps,
    'children' | 'fontVariantNumeric' | 'lineClamp'
  > {
  color?: Extract<BaseParagraphProps['color'], 'subdued' | 'base'>;
  tone?: Extract<
    BaseParagraphProps['tone'],
    'auto' | 'info' | 'success' | 'warning' | 'critical' | 'neutral' | 'custom'
  >;
}

export const paragraphColors = [
  'subdued',
  'base',
] satisfies ParagraphProps['color'][];

export const paragraphDirs = [
  '',
  'auto',
  'ltr',
  'rtl',
] satisfies ParagraphProps['dir'][];

export const paragraphTones = [
  'auto',
  'neutral',
  'info',
  'success',
  'warning',
  'critical',
  'custom',
] satisfies ParagraphProps['tone'][];

export const paragraphTypes = [
  'paragraph',
  'small',
] satisfies ParagraphProps['type'][];

export interface ParagraphItem
  extends ParagraphProps,
    Omit<HTMLElement, 'id' | 'dir' | 'lang'> {}

declare global {
  interface HTMLElementTagNameMap {
    's-paragraph': ParagraphItem;
  }
}
