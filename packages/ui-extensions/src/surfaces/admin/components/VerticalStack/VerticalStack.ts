import {createRemoteComponent} from '@remote-ui/core';
import type {
  CrossAxisAlignment,
  MainAxisAlignment,
  SpaceScale,
} from '../shared';

export interface VerticalStackProps {
  /** Vertical alignment of children */
  blockAlign?: MainAxisAlignment;
  /** Horizontal alignment of children */
  inlineAlign?: CrossAxisAlignment;
  /** The spacing between children */
  gap?: SpaceScale;
  /** Reverse the render order of child items
   * @default false
   */
  reverseOrder?: boolean;
}

export const VerticalStack = createRemoteComponent<
  'VerticalStack',
  VerticalStackProps
>('VerticalStack');
