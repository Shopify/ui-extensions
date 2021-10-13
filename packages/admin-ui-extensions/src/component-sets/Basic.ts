import {
  InlineStack,
  Heading,
  Pressable,
  Stack,
  BlockStack,
  StackItem,
  Text,
  TextBlock,
  LineChart,
} from '../components';

export type BasicComponents =
  | typeof InlineStack
  | typeof Heading
  | typeof Pressable
  | typeof Stack
  | typeof BlockStack
  | typeof StackItem
  | typeof Text
  | typeof TextBlock
  | typeof LineChart;
