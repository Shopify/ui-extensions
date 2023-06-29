import {createRemoteComponent} from '@remote-ui/core';
import {CrossAxisAlignment, MainAxisAlignment, SpaceScale} from '../shared';

export interface HorizontalStackProps {
  /** Vertical alignment of children */
  blockAlign?: CrossAxisAlignment;
  /** Horizontal alignment of children */
  inlineAlign?: MainAxisAlignment;
  /** The spacing between children */
  gap?: SpaceScale;
  /** Reverse the render order of child items
   * @default false
   */
  reverseOrder?: boolean;
}

export const HorizontalStack = createRemoteComponent<
  'HorizontalStack',
  HorizontalStackProps
>('HorizontalStack');
