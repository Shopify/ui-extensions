import {useLayoutEffect, useRef} from 'react';
import type {ForwardedRef, RefObject, RefCallback} from 'react';

export function useCustomElementProperties<T extends HTMLElement>(
  props: Record<string, any>,
  ref: ForwardedRef<T>,
) {
  const internalsRef = useRef<{
    names: Set<string>;
    values: Record<string, any>;
    ref: WrapperRef<T>;
  }>();
  internalsRef.current ??= {
    names: new Set(),
    values: {},
    ref: new WrapperRef(ref),
  };

  const internals = internalsRef.current;
  internals.ref.wrapped = ref;

  useLayoutEffect(() => {
    const oldNames = new Set(internals.names);
    const newNames = new Set(Object.keys(props));

    const element = internals.ref.current;

    for (const name of newNames) {
      const newValue = props[name];
      const oldValue = internals.values[name];

      internals.values[name] = newValue;
      oldNames.delete(name);

      if (element != null && newValue !== oldValue) {
        if (name in element) {
          (element as any)[name] = newValue;
        } else if (newValue) {
          element.setAttribute(name, newValue);
        } else {
          element.removeAttribute(name);
        }
      }
    }

    for (const name of oldNames) {
      const oldValue = internals.values[name];
      delete internals.values[name];

      if (element != null && oldValue !== undefined) {
        if (name in element) {
          (element as any)[name] = undefined;
        } else {
          element.removeAttribute(name);
        }
      }
    }

    internals.names = newNames;
  });

  return internals.ref.callback;
}

class WrapperRef<T> implements RefObject<T> {
  #wrapped: ForwardedRef<T>;
  #current: T | null = null;

  constructor(wrapped: ForwardedRef<T>) {
    this.#wrapped = wrapped;
  }

  get wrapped() {
    return this.#wrapped;
  }

  set wrapped(wrapped: ForwardedRef<T>) {
    this.#wrapped = wrapped;
  }

  get current() {
    return this.#current;
  }

  set current(value: T | null) {
    this.#current = value;

    if (typeof this.#wrapped === 'function') {
      this.#wrapped(value);
    } else if (this.#wrapped) {
      this.#wrapped.current = value;
    }
  }

  callback: RefCallback<T> = (value) => {
    this.current = value;
  };
}
