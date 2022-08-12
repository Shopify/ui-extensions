export interface InteractiveConditions {
  hover: true;
  focus: true;
}

type ViewportInlineSize = 'small' | 'medium' | 'large';

export interface ViewportSizeCondition {
  viewportInlineSize: {min: ViewportInlineSize};
}

type AtLeastOne<T, U = {[K in keyof T]: Pick<T, K>}> = Partial<T> & U[keyof U];

export type DefaultConditions = InteractiveConditions & ViewportSizeCondition;

export type Conditions = AtLeastOne<DefaultConditions>;

export interface ConditionalValue<T, AcceptedConditions = Conditions> {
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

export interface ConditionalStyle<T, AcceptedConditions = Conditions> {
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

export type MaybeConditionalStyle<T, AcceptedConditions = Conditions> =
  | T
  | ConditionalStyle<T, AcceptedConditions>;
