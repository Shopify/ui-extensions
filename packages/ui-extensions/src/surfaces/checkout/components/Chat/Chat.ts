import type {ChatProps as BaseChatProps} from '@shopify/ui-api-design';

export interface ChatProps
  extends Omit<BaseChatProps, 'src' | 'inlineSize' | 'blockSize'> {
  blockSize?: Extract<BaseChatProps['blockSize'], `${number}px` | '0'>;
  inlineSize?: Extract<BaseChatProps['inlineSize'], `${number}px` | '0'>;
}
