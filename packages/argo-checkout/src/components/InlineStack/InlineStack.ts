import {createRemoteComponent} from '@remote-ui/core';

type Alignment = 'leading' | 'center' | 'trailing' | 'baseline';
type Spacing =
  | 'none'
  | 'extraTight'
  | 'tight'
  | 'base'
  | 'loose'
  | 'extraLoose';

export interface InlineStackProps {
  /** Position children along the cross axis */
  alignment?: Alignment;
  /**
   * Adjust spacing between children
   * @default `base`
   **/
  spacing?: Spacing;
  /**
   * Wrap elements on multiple lines if content is larger
   * than parent container.
   */
  wrap?: boolean;
}

/**
 * InlineStack is used to lay out a horizontal row of elements
 */
export const InlineStack = createRemoteComponent<
  'InlineStack',
  InlineStackProps
>('InlineStack');
