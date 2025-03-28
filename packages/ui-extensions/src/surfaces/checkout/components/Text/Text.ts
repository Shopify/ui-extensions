import {createRemoteComponent} from '@remote-ui/core';
import type {TextProps as BaseTextProps} from '@shopify/ui-api-design/dist/components/Text';

export interface TextProps
  extends Pick<BaseTextProps, 'id' | 'dir' | 'display' | 'lang'> {
  accessibilityVisibility?: Extract<
    BaseTextProps['accessibilityVisibility'],
    'visible' | 'hidden' | 'exclusive'
  >;
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
    | 'strong'
    | 'generic'
  >;
}

/**
 * Text is used to visually style and provide semantic value for a small piece of text
 * content.
 */
export const Text = createRemoteComponent<'Text', TextProps>('Text');
