import {memoize} from './memoize';
import {Conditions, ConditionalStyle, BaseConditions} from './types';
import {isEqual} from './isEqual';

const MAX_CACHE_SIZE = 50;

const MEMOIZE_OPTIONS = {
  equalityCheck: isEqual,
  maxSize: MAX_CACHE_SIZE,
};

type Chainable<TConditionalStyle> = TConditionalStyle extends ConditionalStyle<
  infer T,
  infer TAcceptedConditions
>
  ? TConditionalStyle & {
      when: <
        U,
        AcceptedConditions extends BaseConditions = TAcceptedConditions,
      >(
        this: TConditionalStyle,
        conditions: AcceptedConditions,
        value: U,
      ) => Chainable<
        TConditionalStyle extends {default: T}
          ? Required<ConditionalStyle<U, AcceptedConditions>>
          : ConditionalStyle<U, AcceptedConditions>
      >;
    }
  : never;

type WhenContext<T, AcceptedConditions extends BaseConditions = Conditions> =
  | typeof Style
  | ConditionalStyle<T, AcceptedConditions>
  | Required<ConditionalStyle<T, AcceptedConditions>>;

type WhenReturnType<
  T,
  TContext extends WhenContext<any, AcceptedConditions>,
  AcceptedConditions extends BaseConditions = Conditions,
> = Chainable<
  TContext extends typeof Style
    ? ConditionalStyle<T, AcceptedConditions>
    : TContext extends {default: infer U}
    ? Required<ConditionalStyle<T | U, AcceptedConditions>>
    : TContext extends {default?: infer U}
    ? ConditionalStyle<T | U, AcceptedConditions>
    : ConditionalStyle<T, AcceptedConditions>
>;

interface WhenFunction {
  <
    T,
    TContext extends WhenContext<any, AcceptedConditions>,
    AcceptedConditions extends BaseConditions = Conditions,
  >(
    this: TContext,
    conditions: AcceptedConditions,
    value: T,
  ): WhenReturnType<T, TContext, AcceptedConditions>;
}

// eslint-disable-next-line func-style
const when: WhenFunction = function when<
  T,
  TContext extends WhenContext<any, AcceptedConditions>,
  AcceptedConditions extends BaseConditions = Conditions,
>(this: TContext, conditions: AcceptedConditions, value: T) {
  const config = isConditionalStyle<T, AcceptedConditions>(this)
    ? {
        default: this.default,
        conditionals: [...this.conditionals, {conditions, value}],
      }
    : {
        conditionals: [{conditions, value}],
      };

  return createChainableConditionalStyle<T, AcceptedConditions>(
    config,
  ) as WhenReturnType<T, TContext, AcceptedConditions>;
};

export interface DocsStyle {
  default: <T>(defaultValue: T) => ConditionalStyle<T>;
  when: <T>(conditions: Conditions, value: T) => ConditionalStyle<T>;
}

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
    <T, AcceptedConditions extends BaseConditions = Conditions>(
      defaultValue: T,
    ) =>
      createChainableConditionalStyle<
        T,
        AcceptedConditions,
        Required<ConditionalStyle<T, AcceptedConditions>>
      >({
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

function createChainableConditionalStyle<
  T,
  AcceptedConditions extends BaseConditions = Conditions,
  TConditionalStyle extends ConditionalStyle<
    T,
    AcceptedConditions
  > = ConditionalStyle<T, AcceptedConditions>,
>(conditionalStyle: TConditionalStyle): Chainable<TConditionalStyle> {
  const proto = {} as {
    when: WhenFunction;
  };

  const returnConditionalStyle = Object.create(
    proto,
  ) as Chainable<TConditionalStyle>;

  Object.assign(returnConditionalStyle, conditionalStyle);

  proto.when = memoize(when.bind(returnConditionalStyle), MEMOIZE_OPTIONS);

  return returnConditionalStyle;
}

export function isConditionalStyle<
  T,
  AcceptedConditions extends BaseConditions = Conditions,
>(value?: any): value is ConditionalStyle<T, AcceptedConditions> {
  return value !== null && typeof value === 'object' && 'conditionals' in value;
}

export function isConditionalStyleWithDefault<
  T,
  AcceptedConditions extends BaseConditions = Conditions,
>(value?: any): value is Required<ConditionalStyle<T, AcceptedConditions>> {
  return (
    isConditionalStyle(value) &&
    'default' in value &&
    value.default !== undefined
  );
}
