import {
  createElement,
  useRef,
  useLayoutEffect,
  useCallback,
  forwardRef,
} from 'react';

export const createRemoteComponent = (name: string) =>
  (shopify as any)._createReactRemoteComponent(
    {
      createElement,
      useRef,
      useLayoutEffect,
      useCallback,
      forwardRef,
    },
    name,
  );
