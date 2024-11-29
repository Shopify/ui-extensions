import {
  createElement,
  useRef,
  useLayoutEffect,
  useCallback,
  forwardRef,
} from 'react';

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
  return (shopify as any)._createReactRemoteComponent(
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
