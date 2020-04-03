import {LegacyRef, useCallback, useLayoutEffect, useState} from 'react';
import {ResizeObserver as Polyfill, ResizeObserverEntry} from '@juggle/resize-observer';

const ResizeObserver: typeof Polyfill = (window && (window as any).ResizeObserver) || Polyfill;

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

export default useResizeObserver;
