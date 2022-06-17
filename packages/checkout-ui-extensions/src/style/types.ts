interface InteractiveConditions {
  hover: true;
  focus: true;
}

type ViewportInlineSize = 'small' | 'medium' | 'large';

interface ViewportSizeCondition {
  viewportInlineSize: {min: ViewportInlineSize};
}

type AtLeastOne<T, U = {[K in keyof T]: Pick<T, K>}> = Partial<T> & U[keyof U];

export type Conditions = AtLeastOne<
  InteractiveConditions & ViewportSizeCondition
>;

export interface ConditionalValue<T> {
  /**
   * The conditions that must be met for the value to be applied. At least one
   * condition must be specified.
   */
  conditions: Conditions;
  /**
   * The value that will be applied if the conditions are met.
   */
  value: T;
}

export interface ConditionalStyle<T> {
  default?: T;
  conditionals: ConditionalValue<T>[];
}

export type MaybeConditionalStyle<T> = T | ConditionalStyle<T>;
