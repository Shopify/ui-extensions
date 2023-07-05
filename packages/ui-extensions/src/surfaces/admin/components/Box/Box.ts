import {createRemoteComponent} from '@remote-ui/core';

export interface BoxProps {
  /**
   * Adjust the padding.
   *
   * To shorten the code, it is possible to specify all the padding for all edges of the box in one property.
   *
   * - `base` means block-start, inline-end, block-end and inline-start paddings are `base`.
   * - `base none` means block-start and block-end paddings are `base`, inline-start and inline-end paddings are `none`.
   * - `base none large` means block-start padding is `base`, inline-end padding is `none`, block-end padding is `large` and inline-start padding is `none`.
   * - `base none large small` means block-start padding is `base`, inline-end padding is `none`, block-end padding is `large` and inline-start padding is `small`.
   * - `true` applies a default padding that is appropriate for the component.
   *
   * Learn more about the 1-to-4-value syntax at https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#edges_of_a_box
   */
  padding?: MaybeAllBoxEdgesShorthandProperty<SpacingKeyword | boolean>;

  /**
   * Adjust the padding on the top edge of the box.
   * @deprecated Using {@link paddingBlockStart} is preferred, as it repsects writing direction.
   */
  paddingTop?: SpacingKeyword | boolean;

  /**
   * Adjust the padding on the bottom edge of the box.
   * @deprecated Using {@link paddingBlockEnd} is preferred, as it repsects writing direction.
   */
  paddingBottom?: SpacingKeyword | boolean;

  /**
   * Adjust the padding on the left edge of the box.
   * @deprecated Using {@link paddingInlineStart} is preferred, as it repsects writing direction.
   */
  paddingLeft?: SpacingKeyword | boolean;

  /**
   * Adjust the padding on the right edge of the box.
   * @deprecated Using {@link paddingInlineEnd} is preferred, as it repsects writing direction.
   */
  paddingRight?: SpacingKeyword | boolean;

  /**
   * Adjust the block-padding.
   *
   * - `base none` means block-start padding is `base`, block-end padding is `none`.
   */
  paddingBlock?: MaybeTwoBoxEdgesShorthandProperty<SpacingKeyword | boolean>;

  /**
   * Adjust the block-start padding.
   */
  paddingBlockStart?: SpacingKeyword | boolean;

  /**
   * Adjust the block-end padding.
   */
  paddingBlockEnd?: SpacingKeyword | boolean;

  /**
   * Adjust the inline padding.
   *
   * - `base none` means inline-start padding is `base`, inline-end padding is `none`.
   */
  paddingInline?: MaybeTwoBoxEdgesShorthandProperty<SpacingKeyword | boolean>;

  /**
   * Adjust the inline-start padding.
   */
  paddingInlineStart?: SpacingKeyword | boolean;

  /**
   * Adjust the inline-end padding.
   */
  paddingInlineEnd?: SpacingKeyword | boolean;
}

type SpacingKeyword = 'none' | 'small' | 'base' | 'large';

type MaybeAllBoxEdgesShorthandProperty<T extends SpacingKeyword | boolean> =
  | T
  | `${T} ${T}`
  | `${T} ${T} ${T}`
  | `${T} ${T} ${T} ${T}`;

type MaybeTwoBoxEdgesShorthandProperty<T extends SpacingKeyword | boolean> =
  | T
  | `${T} ${T}`;

export const Box = createRemoteComponent<'Box', BoxProps>('Box');
