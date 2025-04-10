import {createRemoteComponent} from '@remote-ui/core';
import type {ChatProps as BaseChatProps} from '@shopify/ui-api-design/dist/components/Chat';

export interface ChatProps
  extends Omit<BaseChatProps, 'src' | 'inlineSize' | 'blockSize'> {
  blockSize?: Extract<BaseChatProps['blockSize'], `${number}px` | '0'>;
  inlineSize?: Extract<BaseChatProps['inlineSize'], `${number}px` | '0'>;
}

/**
 * Use the Chat component to create real-time chat applications.
 */
export const Chat = createRemoteComponent<'Chat', ChatProps>('Chat');
