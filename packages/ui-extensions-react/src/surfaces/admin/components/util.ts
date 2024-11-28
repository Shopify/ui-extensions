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
// Add `children` prop, but only if it wasn't already defined:
type PropsWithChildren<T> = T extends {children: React.ReactNode}
  ? T
  : React.PropsWithChildren<T>;

export function createRemoteComponent<
  Props extends object,
  ElementType extends HTMLElement,
>(
  tagName: string,
): React.ForwardRefExoticComponent<
  React.PropsWithoutRef<PropsWithChildren<Props>> &
    React.RefAttributes<ElementType>
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
