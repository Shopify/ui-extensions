import {LegacyRef, useCallback, useEffect, useLayoutEffect, useMemo, useState} from 'react';
import {ResizeObserver as Polyfill, ResizeObserverEntry} from '@juggle/resize-observer';
import {Layout, LayoutApi} from '@shopify/argo/extension-api/layout';
import {retain} from '@shopify/remote-ui-core';

// See https://github.com/Shopify/app-extension-libs/issues/237#issuecomment-606625111
const SIZE_CLASS_BREAK_POINT = 480;

const ResizeObserver: typeof Polyfill =
  (typeof window !== 'undefined' && (window as any).ResizeObserver) || Polyfill;

const useResizeObserver: () => [LegacyRef<any>, ResizeObserverEntry | undefined] = () => {
  const [entry, setEntry] = useState<ResizeObserverEntry | undefined>();
  const [element, setElement] = useState<Element | undefined>();
  const setRef = useCallback(setElement, []);

  useLayoutEffect(() => {
    if (!element) {
      return;
    }
    const observer = new ResizeObserver(([entry]) => setEntry(entry));
    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, [element]);

  return [setRef, entry];
};

type Callback = {
  onLayoutChange: (layout: Layout) => void;
};

export function useLayoutApi(
  sizeClassBreakPoint: number = SIZE_CLASS_BREAK_POINT,
): [ReturnType<typeof useResizeObserver>[0], LayoutApi | undefined] {
  const [ref, entry] = useResizeObserver();
  const [layout, setLayout] = useState<Layout>();
  const [initialValue, setInitialValue] = useState<Layout>();
  const [callback, setCallback] = useState<Callback>();

  useEffect(() => {
    if (!entry) {
      return;
    }
    const newLayout: Layout = {
      horizontal: entry.contentRect.width > sizeClassBreakPoint ? 'regular' : 'compact',
    };
    if (!initialValue) {
      setInitialValue(newLayout);
    }
    if (JSON.stringify(newLayout) !== JSON.stringify(layout)) {
      setLayout(newLayout);
    }
  }, [sizeClassBreakPoint, entry, initialValue, layout]);

  useEffect(() => {
    if (!layout || !callback) {
      return;
    }
    callback?.onLayoutChange(layout);
  }, [layout, callback]);

  return useMemo(() => {
    const layoutApi: LayoutApi | undefined = initialValue
      ? {
          layout: {
            initialValue,
            setOnChange: onLayoutChange => {
              retain(onLayoutChange);
              setCallback({onLayoutChange});
            },
          },
        }
      : undefined;
    return [ref, layoutApi];
  }, [initialValue, ref]);
}
