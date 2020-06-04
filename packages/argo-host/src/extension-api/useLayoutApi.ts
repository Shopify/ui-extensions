import {LegacyRef, useCallback, useEffect, useLayoutEffect, useMemo, useState} from 'react';
import {ResizeObserver as Polyfill, ResizeObserverEntry} from '@juggle/resize-observer';
import {Layout, LayoutApi} from '@shopify/argo/extension-api/layout';
import {retain} from '@shopify/remote-ui-core';

// See https://github.com/Shopify/app-extension-libs/issues/237#issuecomment-606625111
const SIZE_CLASS_BREAK_POINT = 480;

function resizeObserver(callback: (entries: ResizeObserverEntry[], observer: Polyfill) => void) {
  const ResizeObserver: typeof Polyfill =
    typeof window === 'undefined' ? Polyfill : (window as any).ResizeObserver;
  return new ResizeObserver(callback);
}

const useResizeObserver: () => [LegacyRef<any>, ResizeObserverEntry | undefined] = () => {
  const [entry, setEntry] = useState<ResizeObserverEntry | undefined>();
  const [element, setElement] = useState<Element | undefined>();
  const setRef = useCallback(setElement, []);

  useLayoutEffect(() => {
    if (!element) {
      return;
    }
    const observer = resizeObserver(([entry]) => setEntry(entry));
    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, [element]);

  return [setRef, entry];
};

export function useLayoutApi(
  sizeClassBreakPoint: number = SIZE_CLASS_BREAK_POINT,
): [ReturnType<typeof useResizeObserver>[0], LayoutApi | undefined] {
  const [ref, entry] = useResizeObserver();
  const [layout, setLayout] = useState<Layout>();
  const [initialValue, setInitialValue] = useState<Layout>();
  const [onLayoutChange, setOnLayoutChange] = useState<(layout: Layout) => void>();

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
    if (!layout || !onLayoutChange) {
      return;
    }
    onLayoutChange(layout);
  }, [layout, onLayoutChange]);

  return useMemo(() => {
    const layoutApi: LayoutApi | undefined = initialValue
      ? {
          layout: {
            initialValue,
            setOnChange: onLayoutChange => {
              retain(onLayoutChange);
              setOnLayoutChange(() => onLayoutChange);
            },
          },
        }
      : undefined;
    return [ref, layoutApi];
  }, [initialValue, ref]);
}
