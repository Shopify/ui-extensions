import {createRemoteComponent} from '@remote-ui/core';
import type {HorizontalSpacing, VerticalSpacing} from '../Spacing/Spacing';

export type Spacing =
  | 0.5
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 13
  | 16;

export interface StackProps {
  direction: 'vertical' | 'horizontal';
  alignment?:
    | 'flex-end'
    | 'center'
    | 'flex-start'
    | 'space-around'
    | 'space-between'
    | 'space-evenly';
  paddingVertical?: VerticalSpacing;
  paddingHorizontal?: HorizontalSpacing;
  spacing?: Spacing;
  flexChildren?: boolean;
  flex?: number;
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse' | undefined;
}

export const Stack = createRemoteComponent<'Stack', StackProps>('Stack');
