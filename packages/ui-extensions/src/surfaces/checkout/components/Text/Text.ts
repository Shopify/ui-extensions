import {createRemoteComponent} from '@remote-ui/core';
import type {TextProps as BaseTextProps} from '@shopify/ui-api-design/dist/components/Text';

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

export const textAccessibilityVisibilities = [
  'visible',
  'hidden',
  'exclusive',
] satisfies TextProps['accessibilityVisibility'][];

export const textColors = ['subdued', 'base'] satisfies TextProps['color'][];

export const textDirs = ['', 'auto', 'ltr', 'rtl'] satisfies TextProps['dir'][];

export const textDisplays = ['auto', 'none'] satisfies TextProps['display'][];

export const textTones = [
  'auto',
  'neutral',
  'info',
  'success',
  'warning',
  'critical',
  'custom',
] satisfies TextProps['tone'][];

export const textTypes = [
  'address',
  'redundant',
  'mark',
  'emphasis',
  'offset',
  'strong',
  'generic',
] satisfies TextProps['type'][];

/**
 * Text is used to visually style and provide semantic value for a small piece of text
 * content.
 */
export interface TextElement
  extends TextProps,
    Omit<HTMLElement, 'id' | 'dir' | 'lang'> {}

declare global {
  interface HTMLElementTagNameMap {
    's-text': TextElement;
  }
}

export const Text = createRemoteComponent<'Text', TextProps>('Text');
