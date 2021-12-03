import { createRemoteComponent } from '@remote-ui/core';

/**
 * By default, each individual element in a Stack is treated as one stack item.
 *
 * Wrap multiple elements in a `StackItem` component, and the `Stack` component will treat them as one item.
 */
export var StackItem = createRemoteComponent('StackItem');