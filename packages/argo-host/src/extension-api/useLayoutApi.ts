import {LegacyRef, useCallback, useEffect, useLayoutEffect, useMemo, useState} from 'react';
import {ResizeObserver as Polyfill, ResizeObserverEntry} from '@juggle/resize-observer';
import {LayoutHandler, LayoutApi, LayoutPayload} from '@shopify/argo';
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

export function useLayoutApi(
  sizeClassBreakPoint: number = SIZE_CLASS_BREAK_POINT,
): [ReturnType<typeof useResizeObserver>[0], LayoutApi | undefined] {
  const [ref, entry] = useResizeObserver();
  const [layout, setLayout] = useState<LayoutPayload>();
  const [initialData, setInitialData] = useState<LayoutPayload>();
  const [layoutHandler, setLayoutHandler] = useState<LayoutHandler>();

  useEffect(() => {
    if (!entry) {
      return;
    }
    const newLayout: LayoutPayload = {
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
    const layoutApi: LayoutApi | undefined = initialData
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
    return [ref, layoutApi];
  }, [initialData, ref]);
}
