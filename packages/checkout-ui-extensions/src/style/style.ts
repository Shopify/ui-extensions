import {defaultMemoize as memoize} from 'reselect';

import {Conditions, ConditionalStyle} from './types';
import {isEqual} from './isEqual';

const MAX_CACHE_SIZE = 50;

const MEMOIZE_OPTIONS = {
  equalityCheck: isEqual,
  maxSize: MAX_CACHE_SIZE,
};

type WhenMethod<T> = (
  conditions: Conditions,
  value: T,
) => Readonly<ChainableConditionalStyle<T>>;

interface WhenObject<T> {
  when: WhenMethod<T>;
}
type ChainableConditionalStyle<T> = ConditionalStyle<T> & WhenObject<T>;

function createChainableConditionalStyle<T>({
  conditionals = [],
  defaultValue,
}: {
  conditionals?: ConditionalStyle<T>['conditionals'];
  defaultValue?: T;
}): Readonly<ChainableConditionalStyle<T>> {
  const proto = {} as WhenObject<T>;
  const returnConditionalStyle = Object.create(
    proto,
  ) as ChainableConditionalStyle<T>;

  Object.assign(returnConditionalStyle, {
    default: defaultValue,
    conditionals,
  });

  const whenMethod = (conditions: Conditions, value: T) =>
    createChainableConditionalStyle({
      conditionals: [
        ...returnConditionalStyle.conditionals,
        {conditions, value},
      ],
      defaultValue: returnConditionalStyle.default,
    });

  proto.when = memoize(whenMethod, MEMOIZE_OPTIONS);

  return returnConditionalStyle;
}

export const Style = {
  default: memoize(
    <T>(defaultValue: T) => createChainableConditionalStyle({defaultValue}),
    MEMOIZE_OPTIONS,
  ),
  when: memoize(
    <T>(conditions: Conditions, value: T) =>
      createChainableConditionalStyle({
        conditionals: [{conditions, value}],
      }),
    MEMOIZE_OPTIONS,
  ),
};
