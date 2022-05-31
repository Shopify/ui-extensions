interface InteractiveConditions {
  hover: boolean;
  focus: boolean;
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
  conditions: Conditions;
  value: T;
}

export interface ConditionalStyle<T> {
  default?: T;
  conditionals: ConditionalValue<T>[];
}

export type MaybeConditionalStyle<T> = T | ConditionalStyle<T>;
