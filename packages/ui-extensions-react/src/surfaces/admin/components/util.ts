import {
  createElement,
  useRef,
  useLayoutEffect,
  useCallback,
  forwardRef,
  type ComponentType,
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

export function createRemoteComponent<
  Props extends object,
  CustomElement extends HTMLElement,
>(
  tagName: string,
): React.ForwardRefExoticComponent<
  Props & {
    children?: React.ReactNode | undefined;
  } & React.RefAttributes<CustomElement>
> {
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
