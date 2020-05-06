import {LegacyRef, useCallback, useEffect, useLayoutEffect, useMemo, useState} from 'react';
import {ResizeObserver as Polyfill, ResizeObserverEntry} from '@juggle/resize-observer';
import {Layout, LayoutHandler, LayoutInput} from '@shopify/argo';
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

export function useLayoutInput(
  sizeClassBreakPoint: number = SIZE_CLASS_BREAK_POINT,
): [ReturnType<typeof useResizeObserver>[0], LayoutInput | undefined] {
  const [ref, entry] = useResizeObserver();
  const [layout, setLayout] = useState<Layout>();
  const [initialData, setInitialData] = useState<Layout>();
  const [layoutHandler, setLayoutHandler] = useState<LayoutHandler>();

  useEffect(() => {
    if (!entry) {
      return;
    }
    const newLayout: Layout = {
      horizontal: entry.contentRect.width > sizeClassBreakPoint ? 'regular' : 'compact',
    };
    if (!initialData) {
      setInitialData(newLayout);
    }
    if (JSON.stringify(newLayout) !== JSON.stringify(layout)) {
      setLayout(newLayout);
    }
  }, [sizeClassBreakPoint, entry, initialData, layout]);

  useEffect(() => {
    if (!layout || !layoutHandler) {
      return;
    }
    layoutHandler.onLayoutChange(layout);
  }, [layout, layoutHandler]);

  return useMemo(() => {
    const layoutInput: LayoutInput | undefined = initialData
      ? {
          layout: {
            initialData: initialData,
            setHandler: newHandler => {
              retain(newHandler);
              setLayoutHandler(newHandler);
            },
          },
        }
      : undefined;
    return [ref, layoutInput];
  }, [initialData, ref]);
}
