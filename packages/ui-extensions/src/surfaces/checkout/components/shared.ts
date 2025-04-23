import type {AccessibilityRole} from '@shopify/ui-api-design/dist/shared/accessibility';
import type {
  BorderProps,
  BorderRadiusKeyword,
  BorderSizeKeyword,
  BorderStyleKeyword,
  SizeUnits,
  SizeUnitsOrAuto,
  SizeUnitsOrNone,
} from '@shopify/ui-api-design/dist/shared/box';
import type {
  ButtonBehaviorProps,
  InteractionProps,
} from '@shopify/ui-api-design/dist/shared/clickable';
import type {GlobalProps} from '@shopify/ui-api-design/dist/shared/global';
import type {
  AlignContentKeyword,
  AlignItemsKeyword,
  JustifyContentKeyword,
  SpacingKeyword,
} from '@shopify/ui-api-design/dist/shared/inner-layout';
import type {
  ColorKeyword,
  SizeKeyword,
} from '@shopify/ui-api-design/dist/shared/scales';
import type {
  MaybeAllValuesShorthandProperty,
  MaybeTwoValuesShorthandProperty,
} from '@shopify/ui-api-design/dist/shared/utils';

import type {MaybeResponsiveConditionalStyle} from '../style/types';

export type {
  AccessibilityRole,
  AlignContentKeyword,
  AlignItemsKeyword,
  BorderProps,
  BorderRadiusKeyword,
  BorderStyleKeyword,
  ButtonBehaviorProps,
  ColorKeyword,
  GlobalProps,
  InteractionProps,
  JustifyContentKeyword,
  MaybeAllValuesShorthandProperty,
  MaybeTwoValuesShorthandProperty,
  SizeKeyword,
  SizeUnits,
  SizeUnitsOrAuto,
  SizeUnitsOrNone,
  SpacingKeyword,
};

export type NonPresentationalAccessibilityRole = Omit<
  AccessibilityRole,
  'generic' | 'presentation' | 'none'
>;

export type ViewLikeAccessibilityRole =
  | NonPresentationalAccessibilityRole
  | [NonPresentationalAccessibilityRole, NonPresentationalAccessibilityRole];

/**
 * @deprecated Use `max` in `BorderRadiusKeyword`
 */
export type DeprecatedBorderRadiusKeyword = 'fullyRounded';
export type ExtendedBorderRadiusKeyword =
  | BorderRadiusKeyword
  | DeprecatedBorderRadiusKeyword;
export type ReducedBorderRadiusKeyword = Extract<
  ExtendedBorderRadiusKeyword,
  | 'none'
  | 'small-100'
  | 'small'
  | 'base'
  | 'large'
  | 'large-100'
  | 'max'
  | 'fullyRounded'
>;

export type ReducedBorderSizeKeyword = Extract<
  BorderSizeKeyword,
  'none' | 'base' | 'large' | 'large-100' | 'large-200'
>;

export type ReducedColorKeyword = Extract<ColorKeyword, 'base'>;

export type BorderShorthand =
  | ReducedBorderSizeKeyword
  | `${ReducedBorderSizeKeyword} ${ReducedColorKeyword}`
  | `${ReducedBorderSizeKeyword} ${ReducedColorKeyword} ${BorderStyleKeyword}`;

export type Opacity = 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90;

export type Display = 'none' | 'auto' | 'inline' | 'block';

/**
 * @deprecated Use `contain` or `cover` in combination with `aspectRatio`
 */
export type DeprecatedObjectFitKeyword = 'fill';
export type ObjectFitKeyword = 'contain' | 'cover' | DeprecatedObjectFitKeyword;

/**
 * The `Spacing` type needed to be used in some of the legacy components and was used in some app implementations.
 * But it was not part of the public API, found here https://github.com/Shopify/ui-extensions/blob/unstable/packages/ui-extensions/src/surfaces/checkout/components/shared.ts#L504.
 *
 * Use `SpacingKeyword` instead
 */
export type DeprecatedSpacing =
  | 'none'
  | 'small500'
  | 'small400'
  | 'small300'
  | 'small200'
  | 'small100'
  | 'base'
  | 'large100'
  | 'large200'
  | 'large300'
  | 'large400'
  | 'large500'
  | 'extraTight'
  | 'tight'
  | 'loose'
  | 'extraLoose';

export type DeprecatedShorthandProperty<T> = [T, T] | [T, T, T, T];

export type DeprecatedMaybeShorthandProperty<T> =
  | T
  | DeprecatedShorthandProperty<T>;

export interface DeprecatedSpacingProps {
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
   * - [`base`, `none`, `loose`, `tight`] means blockStart padding is `base`, inlineEnd padding is `none`, blockEnd padding is `loose` and blockStart padding is `tight`
   */
  padding?: MaybeResponsiveConditionalStyle<
    DeprecatedMaybeShorthandProperty<DeprecatedSpacing>
  >;
}

export type TextSize =
  | 'extraSmall'
  | 'small'
  | 'base'
  | 'large'
  | 'extraLarge'
  | 'medium';
