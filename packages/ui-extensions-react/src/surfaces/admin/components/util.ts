import {
  createElement,
  useRef,
  useLayoutEffect,
  useCallback,
  forwardRef,
  type ComponentType,
  type PropsWithChildren,
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
      tagName: string,
    ) => ComponentType;
  }
}

export function createRemoteComponent<Props extends object>(
  tagName: string,
): ComponentType<PropsWithChildren<Props>> {
  return shopify._createReactRemoteComponent(
    {
      createElement,
      useRef,
      useLayoutEffect,
      useCallback,
      forwardRef,
    },
    tagName,
  ) as any;
}
