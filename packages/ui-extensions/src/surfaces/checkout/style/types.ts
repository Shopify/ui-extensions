/**
 * The device pixel ratio used to serve resolution-appropriate images.
 * A value of `1` targets standard displays, while higher values such as
 * `2` or `3` target high-density (Retina) displays.
 */
type Resolution = 1 | 1.3 | 1.5 | 2 | 2.6 | 3 | 3.5 | 4;

/**
 * Conditions that target interactive states of a component.
 */
export interface InteractiveConditions {
  /**
   * Applies when the user is hovering over the component with a pointer device.
   */
  hover: true;
  /**
   * Applies when the component has keyboard or programmatic focus.
   */
  focus: true;
}

/**
 * A condition that targets devices based on their pixel density.
 */
export interface ResolutionCondition {
  /**
   * The minimum device pixel ratio the condition must match.
   */
  resolution: Resolution;
}

/**
 * A keyword that maps to a viewport inline-size breakpoint from the design system.
 *
 * - `extraSmall`: A very narrow viewport, typically small phones.
 * - `small`: A narrow viewport, such as a large phone or small tablet.
 * - `medium`: A medium viewport, such as a tablet in landscape.
 * - `large`: A wide viewport, such as a desktop display.
 */
type ViewportInlineSize = 'extraSmall' | 'small' | 'medium' | 'large';

/**
 * A condition that targets layouts based on the inline size (width in
 * horizontal writing modes) of the viewport.
 */
export interface ViewportSizeCondition<T = ViewportInlineSize> {
  /**
   * The minimum viewport inline size that the condition must match.
   */
  viewportInlineSize: {min: T};
}

/**
 * A utility type that requires at least one property from the given type
 * to be present. Used to ensure that conditional style objects always
 * specify at least one condition.
 */
export type AtLeastOne<T, U = {[K in keyof T]: Pick<T, K>}> = Partial<T> &
  U[keyof U];

type DefaultConditions = InteractiveConditions & ViewportSizeCondition;

export type Conditions = AtLeastOne<DefaultConditions>;

export type BaseConditions = AtLeastOne<
  DefaultConditions & ResolutionCondition
>;

/**
 * The full set of conditions available for conditional styling. At least one
 * condition must be specified.
 */
export interface StylesBaseConditions {
  /**
   * A minimum viewport inline-size breakpoint that must be met.
   */
  viewportInlineSize?: {min: ViewportInlineSize};
  /**
   * Applies when the user is hovering over the component with a pointer device.
   */
  hover?: true;
  /**
   * Applies when the component has keyboard or programmatic focus.
   */
  focus?: true;
  /**
   * A minimum device pixel ratio that must be met. Higher values target high-density (Retina) displays.
   */
  resolution?: 1 | 1.3 | 1.5 | 2 | 2.6 | 3 | 3.5 | 4;
}

/**
 * The set of conditions available for viewport-responsive and interactive styling.
 * At least one condition must be specified.
 */
export interface StylesConditions {
  /**
   * A minimum viewport inline-size breakpoint that must be met.
   */
  viewportInlineSize?: {min: ViewportInlineSize};
  /**
   * Applies when the user is hovering over the component with a pointer device.
   */
  hover?: true;
  /**
   * Applies when the component has keyboard or programmatic focus.
   */
  focus?: true;
}

// This interface is only used to provide documentation for the Style helper.
// It is not used in the implementation.
export interface StylesConditionalValue<
  T,
  AcceptedConditions extends StylesBaseConditions = StylesBaseConditions,
> {
  /**
   * The conditions that must be met for the value to be applied. At least one
   * condition must be specified.
   */
  conditions: AcceptedConditions;
  /**
   * The value that will be applied if the conditions are met.
   */
  value: T;
}

// This interface is only used to provide documentation for the Style helper.
// It is not used in the implementation.
export interface StylesConditionalStyle<
  T,
  AcceptedConditions extends StylesBaseConditions = StylesBaseConditions,
> {
  /**
   * The default value applied when none of the conditional values
   * specified in `conditionals` are met.
   */
  default?: T;
  /**
   * An array of conditional values.
   */
  conditionals: StylesConditionalValue<T, AcceptedConditions>[];
}

/**
 * A single conditional branch that pairs a set of conditions with the
 * value to apply when those conditions are met.
 */
export interface ConditionalValue<
  T,
  AcceptedConditions extends BaseConditions = Conditions,
> {
  /**
   * The conditions that must be met for the value to be applied. At least one
   * condition must be specified.
   */
  conditions: AcceptedConditions;
  /**
   * The value that will be applied if the conditions are met.
   */
  value: T;
}

/**
 * A conditional style definition that maps one or more conditions to
 * different values. The `default` value is used as a fallback when none
 * of the conditions in `conditionals` are satisfied.
 */
export interface ConditionalStyle<
  T,
  AcceptedConditions extends BaseConditions = Conditions,
> {
  /**
   * The default value applied when none of the conditional values
   * specified in `conditionals` are met.
   */
  default?: T;
  /**
   * An array of conditional values.
   */
  conditionals: ConditionalValue<T, AcceptedConditions>[];
}

/**
 * A type that represents a value that can be a conditional style.
 * We highly recommend using the `Style` helper which simplifies the creation of conditional styles.
 */
export type MaybeConditionalStyle<
  T,
  AcceptedConditions extends BaseConditions = Conditions,
> = T | ConditionalStyle<T, AcceptedConditions>;

/**
 * A type that represents a value that can be a conditional style. The conditions are based on the viewport size.
 * We highly recommend using the `Style` helper which simplifies the creation of conditional styles.
 */
export type MaybeResponsiveConditionalStyle<T> =
  | T
  | ConditionalStyle<T, ViewportSizeCondition>;
