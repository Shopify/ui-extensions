import {memoize} from './memoize';
import {Conditions, ConditionalStyle} from './types';
import {isEqual} from './isEqual';

const MAX_CACHE_SIZE = 50;

const MEMOIZE_OPTIONS = {
  equalityCheck: isEqual,
  maxSize: MAX_CACHE_SIZE,
};

type ChainableConditionalStyle<
  T,
  AcceptedConditions = Conditions
> = ConditionalStyle<T, AcceptedConditions> & {
  when: typeof when;
};

/**
 * Style is a helper for authoring conditional values for prop styles.
 * Write complex conditional styles based on one or more conditions (viewport
 * sizes and interactive states) in a concise and expressive way.
 */
export const Style = {
  /**
   * Sets an optional default value to use when no other condition is met.
   *
   * @param defaultValue The default value
   * @returns The chainable condition style
   */
  default: memoize(
    <T, AcceptedConditions = Conditions>(
      defaultValue: T,
    ): ChainableConditionalStyle<T, AcceptedConditions> =>
      createChainableConditionalStyle({
        default: defaultValue,
        conditionals: [],
      }),
    MEMOIZE_OPTIONS,
  ),
  /**
   * Adjusts the style based on different conditions. All conditions, expressed
   * as a literal object, must be met for the associated value to be applied.
   *
   * The `when` method can be chained together to build more complex styles.
   *
   * @param conditions The condition(s)
   * @param value The conditional value that can be applied if the conditions are met
   * @returns The chainable condition style
   */
  when: memoize(when, MEMOIZE_OPTIONS),
} as const;

function when<T, AcceptedConditions = Conditions>(
  // Not happy about having to use any here, but it's the only way to make the types work on the chained methods
  this: any,
  conditions: AcceptedConditions,
  value: T,
): ChainableConditionalStyle<T, AcceptedConditions> {
  if (isConditionalStyle<T, AcceptedConditions>(this)) {
    return createChainableConditionalStyle({
      default: this.default,
      conditionals: [...this.conditionals, {conditions, value}],
    });
  } else {
    return createChainableConditionalStyle({
      conditionals: [{conditions, value}],
    });
  }
}

function createChainableConditionalStyle<T, AcceptedConditions = Conditions>(
  conditionalStyle: ConditionalStyle<T, AcceptedConditions>,
): ChainableConditionalStyle<T, AcceptedConditions> {
  const proto = {} as {
    when: typeof when;
  };

  const returnConditionalStyle = Object.create(
    proto,
  ) as ChainableConditionalStyle<T, AcceptedConditions>;

  Object.assign(returnConditionalStyle, conditionalStyle);

  proto.when = memoize(when.bind(returnConditionalStyle), MEMOIZE_OPTIONS);

  return returnConditionalStyle;
}

export function isConditionalStyle<T, AcceptedConditions = Conditions>(
  value?: any,
): value is ConditionalStyle<T, AcceptedConditions> {
  return value !== null && typeof value === 'object' && 'conditionals' in value;
}
