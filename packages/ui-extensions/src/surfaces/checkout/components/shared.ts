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

/**
 * @deprecated Use `contain` or `cover` in combination with `aspectRatio`
 */
export type DeprecatedObjectFitKeyword = 'fill';
export type ObjectFitKeyword = 'contain' | 'cover' | DeprecatedObjectFitKeyword;
