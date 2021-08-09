import {createRemoteComponent} from '@remote-ui/core';
import type {BaseBlockStackProps} from '@shopify/ui-extensions';

export type {BaseBlockStackProps as BlockStackProps} from '@shopify/ui-extensions';

/**
 * Use to achieve no-fuss vertical centering.
 *
 * A stack is made of flexible items that wrap each of the stack’s children. Options provide control of the alignment and spacing of the items in the stack.
 * Use `StackItem` to group multiple elements inside a `Stack` together.
 */
export const BlockStack = createRemoteComponent<
  'BlockStack',
  BaseBlockStackProps
>('BlockStack');
