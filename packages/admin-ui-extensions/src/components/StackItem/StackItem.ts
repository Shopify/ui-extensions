import {createRemoteComponent} from '@remote-ui/core';

export interface StackItemProps {
  /** Fill the remaining horizontal space in the stack with this item  */
  fill?: boolean;
}

/**
 * By default, each individual element in a Stack is treated as one stack item.
 *
 * Wrap multiple elements in a `StackItem` component, and the `Stack` component will treat them as one item.
 */
export const StackItem = createRemoteComponent<'StackItem', StackItemProps>(
  'StackItem',
);
