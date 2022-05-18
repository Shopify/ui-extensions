import type {AtLeastOne} from './utilities';

interface InteractiveCondition {
  hover: boolean;
  focus: boolean;
}

type ViewportInlineSize = 'small' | 'medium' | 'large';

interface ViewportSizeCondition {
  viewportInlineSize: ViewportInlineSize;
}

export type Conditions = AtLeastOne<
  InteractiveCondition & ViewportSizeCondition
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
