import {
  BlockStack,
  Heading,
  InlineStack,
  Pressable,
  StackItem,
  Text,
  TextBlock,
} from '../components';

export type BasicComponents =
  | typeof BlockStack
  | typeof Heading
  | typeof InlineStack
  | typeof Pressable
  | typeof StackItem
  | typeof Text
  | typeof TextBlock;
