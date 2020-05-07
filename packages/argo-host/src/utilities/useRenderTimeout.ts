import {useState, useEffect, useMemo} from 'react';
import {RemoteReceiver} from '@shopify/remote-ui-react/host';
import {Action} from '@shopify/remote-ui-core';

export function useRenderTimeout(
  receiver: RemoteReceiver,
  timeoutInMs: number,
  deps: any[] = [],
): [RemoteReceiver, boolean] {
  const [isRenderTimedOut, setIsRenderTimedOut] = useState(false);
  const [isRenderTimeoutEnabled, setIsRenderTimeoutEnabled] = useState(true);

  useEffect(() => {
    setIsRenderTimeoutEnabled(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  useEffect(() => {
    if (!isRenderTimeoutEnabled) {
      return;
    }
    const id = setTimeout(() => setIsRenderTimedOut(true), timeoutInMs);
    return () => {
      clearTimeout(id);
    };
  }, [timeoutInMs, isRenderTimeoutEnabled]);

  useEffect(() => {
    const receive = receiver.receive;
    const wrappedReceive: RemoteReceiver['receive'] = (type, ...args) => {
      if (type === Action.Mount) {
        setIsRenderTimeoutEnabled(false);
      }
      receive(type, ...args);
    };
    Object.assign(receiver, {
      receive: wrappedReceive,
    });
  }, [receiver]);

  return useMemo(() => [receiver, isRenderTimedOut], [receiver, isRenderTimedOut]);
}
