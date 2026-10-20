import {useEffect, useState} from 'preact/hooks';
import type {CapabilitiesApi} from '@shopify/ui-extensions/point-of-sale';

export function useCapabilities(signal?: CapabilitiesApi['capabilities']) {
  const [capabilities, setCapabilities] = useState(signal?.value);

  useEffect(() => {
    if (!signal) return;
    const unsubscribe = signal.subscribe(setCapabilities);
    setCapabilities(signal.value);
    return unsubscribe;
  }, [signal]);

  return capabilities;
}
