import {createRemoteComponent} from '@remote-ui/core';
import type {CSSShorthand, Responsive} from '@shopify/checkout-ui-extensions';
import type {Spacing} from '../shared-components';

type Background = 'transparent' | 'color1' | 'color2' | 'color3';

export interface PageBlockProps {
  /**
   * Adjust the background.
   */
  background?: Background;
  /**
   * Adjust the padding.
   *
   * To shorten the code, it is possible to specify all the padding properties in one property.
   *
   *
   * Examples:
   *
   * - `base` means blockStart, inlineEnd, blockEnd and inlineStart paddings are `base`
   *
   * - [`base`, `none`] means blockStart and blockEnd paddings are `base`, inlineStart and inlineEnd paddings are `none`
   *
   * - [`base`, `none`, `loose`, `tight`] means blockStart padding is `base`, inlineEnd padding is `none`, blockEnd padding is `loose` and  blockStart padding is `tight`
   */
  padding?: CSSShorthand<Spacing> | Responsive<CSSShorthand<Spacing>>;
}

export const PageBlock = createRemoteComponent<'PageBlock', PageBlockProps>(
  'PageBlock',
);
