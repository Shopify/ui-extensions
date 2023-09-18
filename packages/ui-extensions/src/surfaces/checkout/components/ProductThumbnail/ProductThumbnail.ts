import {createRemoteComponent} from '@remote-ui/core';

import {MaybeConditionalStyle, ResolutionCondition} from '../../style';
import {Size} from '../shared';

export interface ProductThumbnailProps {
  /**
   * A label that describes the purpose or contents of the icon.
   *
   * This property is an alias for `accessibilityLabel` for compatibility with the HTML
   * specification. When both are specified `accessibilityLabel` takes precedence.
   */
  alt?: string;

  /**
   * A label that describes the purpose or contents of the icon.
   *
   * When set, it will be announced to users using assistive technologies and will provide them with more context.
   * This should only be used if the icon requires an alternative internationalised label
   * or if it is otherwise inappropriate to make use of the default label included with the icon.
   */
  accessibilityLabel?: string;

  /**
   * The image source (either a remote URL or a local file resource).
   *
   * A `src` property is available as an alias for this for compatibility with the HTML
   * specification. When both are specified, `source` takes precedence.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#src
   */
  source?: MaybeConditionalStyle<string, ResolutionCondition>;

  /**
   * The image source (either a remote URL or a local file resource).
   *
   * This property is available as an alias for `source` for compatibility with the HTML
   * specification. When both are specified, `source` takes precedence.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#src
   */
  src?: MaybeConditionalStyle<string, ResolutionCondition>;

  /**
   * Decorates the product thumbnail with the quantity of the product.
   */
  badge?: number;

  /**
   * Adjusts the size the product thumbnail image.
   *
   * @defaultValue 'base'
   */
  size?: Extract<Size, 'base' | 'small'>;
}

export const ProductThumbnail = createRemoteComponent<
  'ProductThumbnail',
  ProductThumbnailProps
>('ProductThumbnail');
