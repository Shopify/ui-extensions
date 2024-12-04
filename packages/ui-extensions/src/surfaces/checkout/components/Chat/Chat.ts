import {createRemoteComponent} from '@remote-ui/core';

import type {IdProps} from '../shared';

export interface ChatProps extends IdProps {
  /**
   * The URL to embed within the Chat component iframe.
   */
  src?: string;

  /**
   * Adjust the inline size.
   *
   * Checkout imposes sizing restrictions for the component, therefore the size set
   * may not be the actual size rendered.
   *
   * - `number`: size in pixels.
   * - `` `${number}%` ``: size in percentages of the available space.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/inline-size
   */
  inlineSize?: number | `${number}%`;

  /**
   * Adjust the block size.
   *
   * Checkout imposes sizing restrictions for the component, therefore the size set
   * may not be the actual size rendered.
   *
   * - `number`: size in pixels.
   * - `` `${number}%` ``: size in percentages of the available space.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/block-size
   */
  blockSize?: number | `${number}%`;

  /**
   * A label that describes the purpose or contents of the component. When set,
   * it will be announced to users using assistive technologies and will
   * provide them with more context.
   */
  accessibilityLabel?: string;

  /**
   * Callback when the embedded page sends a message.
   */
  onMessage?: (event: MessageEvent) => void;

  /**
   * Callback when the embedded page is ready and a message port has been created to
   * communicate with the host page.
   */
  onReady?: (event: ReadyEvent) => void;
}

interface MessageEvent {
  /**
   * The data sent by the message emitter (the embedded page).
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent/data
   */
  data?: any;

  /**
   * A string representing the origin of the message emitter (the embedded page).
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent/origin
   */
  origin: string;
}

interface ReadyEvent {
  /**
   * A function to send messages to the embedded page.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/MessagePort/postMessage
   */
  // eslint-disable-next-line no-warning-comments
  postMessage: (message: any /* TODO , transfer?: Transferable[] */) => void;
}

/**
 * Use Chat to embed another HTML page within the page.
 */
export const Chat = createRemoteComponent<'Chat', ChatProps>('Chat');
