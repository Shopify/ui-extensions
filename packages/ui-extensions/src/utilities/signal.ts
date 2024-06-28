import {signal as createSignal, Signal} from '@preact/signals-core';
import {release, retain} from '@remote-ui/core';

const KEY = '__remote_signal__';

function isSignal<T = unknown>(value: unknown): value is Signal<T> {
  return value != null && value instanceof Signal;
}

interface SignalWrapper<T> {
  [KEY]: true;
  initial: T;
  set?(value: T): void;
  start(
    listener: (value: T) => void,
    options?: {
      signal?: AbortSignal;
    },
  ): void;
}

function isSignalWrapper<T = unknown>(
  value?: unknown,
): value is SignalWrapper<T> {
  return (
    value != null && typeof value === 'object' && (value as any)[KEY] === true
  );
}

function wrapSignal<T>(signal: Signal<T>): SignalWrapper<T> {
  let initialVersion: number;

  return {
    [KEY]: true,
    get initial() {
      // @see https://github.com/preactjs/signals/blob/main/mangle.json#L56
      initialVersion = (signal as any).i;
      return signal.peek();
    },
    set: isReadonlySignal(signal)
      ? undefined
      : (value) => {
          signal.value = value;
        },
    start(subscriber, {signal: abortSignal} = {}) {
      retain(subscriber);

      const teardown = signal.subscribe((value) => {
        if ((signal as any).i === initialVersion) {
          return;
        }

        subscriber(value);
      });

      abortSignal?.addEventListener('abort', () => {
        teardown();
        release(subscriber);
      });
    },
  };
}

function unwrapSignal<T>(signalWrapper: SignalWrapper<T>): Signal<T> {
  const signal = createSignal(signalWrapper.initial);

  const valueDescriptor = Object.getOwnPropertyDescriptor(
    Object.getPrototypeOf(signal),
    'value',
  )!;

  Object.defineProperty(signal, 'value', {
    ...valueDescriptor,
    get() {
      return valueDescriptor.get?.call(this);
    },
    set(value) {
      if (signalWrapper.set == null) {
        throw new Error(`You can't set the value of a readonly thread signal.`);
      }
      signalWrapper.set(value);
      valueDescriptor.set?.call(this, value);
    },
  });

  signalWrapper.start((value) => {
    valueDescriptor.set?.call(signal, value);
  });

  return signal;
}

function isReadonlySignal<T>(signal: Signal<T>): boolean {
  return (
    Object.getOwnPropertyDescriptor(Object.getPrototypeOf(signal), 'value')
      ?.set == null
  );
}

function isBasicObject(value: unknown): value is object {
  if (value == null || typeof value !== 'object') return false;

  const prototype = Object.getPrototypeOf(value);
  return prototype == null || prototype === Object.prototype;
}

export function encode<T>(value: T): T {
  if (value == null) return value;
  if (isSignal(value)) return wrapSignal(value) as any;
  if (typeof value === 'object') {
    if (Array.isArray(value)) {
      return value.map((item) => encode(item)) as any;
    } else if (isBasicObject(value)) {
      return Object.keys(value).reduce((object, key) => {
        return {...object, [key]: encode((value as any)[key])};
      }, {}) as any;
    }
  }
  return value;
}

export function decode<T>(value: T): T {
  if (value == null) return value;
  if (isSignalWrapper(value)) return unwrapSignal(value) as any;
  if (typeof value === 'object') {
    if (Array.isArray(value)) {
      return value.map((item) => decode(item)) as any;
    } else if (isBasicObject(value)) {
      return Object.keys(value).reduce((object, key) => {
        return {...object, [key]: decode((value as any)[key])};
      }, {}) as any;
    }
  }
  return value;
}
