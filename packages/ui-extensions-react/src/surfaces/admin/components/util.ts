import {
  createElement,
  useRef,
  useLayoutEffect,
  useCallback,
  forwardRef,
  ComponentType,
} from 'react';

// These are the pieces of the passed-in copy of `react` we use:
export interface InjectedReact {
  createElement: typeof createElement;
  useRef: typeof useRef;
  useLayoutEffect: typeof useLayoutEffect;
  useCallback: typeof useCallback;
  forwardRef: typeof forwardRef;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace shopify {
    const _createReactRemoteComponent: (
      methods: InjectedReact,
      name: string,
    ) => ComponentType;
  }
}

export const createRemoteComponent = (name: string) =>
  shopify._createReactRemoteComponent(
    {
      createElement,
      useRef,
      useLayoutEffect,
      useCallback,
      forwardRef,
    },
    name,
  );
