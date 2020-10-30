const FUNCTION_CURRENT_IMPLEMENTATION_KEY = '__current';

type HotSwappableFunction<T extends Function> = T & {
  [FUNCTION_CURRENT_IMPLEMENTATION_KEY]: any;
};

function makeValueHotSwappable(value: unknown) {
  if (typeof value === 'function') {
    const wrappedFunction: HotSwappableFunction<any> = ((...args: any[]) => {
      return wrappedFunction[FUNCTION_CURRENT_IMPLEMENTATION_KEY](...args);
    }) as any;

    Object.defineProperty(wrappedFunction, FUNCTION_CURRENT_IMPLEMENTATION_KEY, {
      enumerable: false,
      configurable: false,
      writable: true,
      value,
    });

    return wrappedFunction;
  }

  return value;
}

function updateEachFunction(
  value: unknown,
  updateFn: (fn: Function, oldFn?: Function) => Function,
  previousValue: any = undefined,
) {
  if (typeof value === 'function') {
    return updateFn(value, typeof previousValue === 'function' ? previousValue : undefined);
  }
  if (typeof value === 'object' && value != null) {
    // this includes arrays
    Object.keys(value).forEach((key) => {
      value[key] = updateEachFunction(
        value[key],
        updateFn,
        typeof previousValue === 'object' && previousValue != null ? previousValue[key] : undefined,
      );
    });
  }
  return value;
}

function setCurrentReference(
  paramFn: HotSwappableFunction<any> | Function,
  oldParamFn: HotSwappableFunction<any> | Function,
) {
  const newParamFn = makeValueHotSwappable(paramFn);
  if (oldParamFn) {
    oldParamFn[FUNCTION_CURRENT_IMPLEMENTATION_KEY] = newParamFn;
  }
  return newParamFn;
}

/**
 * This follows the hot-swap pattern set in remote-ui. API functions are also made hot-swappable.
 * https://github.com/Shopify/remote-ui/blob/da297865b30fb770a4bc90516f545e870afac947/packages/core/src/root.ts#L374
 *
 * For example, container.setPrimaryAction(action) will set action.onAction to be hot-swappable
 *
 * @param api
 */
export function makeApiFunctionsHotSwappable(api: object) {
  updateEachFunction(api, (apiFn) => {
    let currentArgs: any;
    return (...args: any[]) => {
      updateEachFunction(args, setCurrentReference, currentArgs);
      currentArgs = args;
      return apiFn(...args);
    };
  });
}
