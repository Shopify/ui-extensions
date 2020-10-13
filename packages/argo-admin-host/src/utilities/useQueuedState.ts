import {useState, useEffect, useCallback} from 'react';

export type FieldValue = string; /* | number | boolean; */

/**
 * Communication between host and client are sometimes out of sync. This happens when the client
 * can't consume the change events fast enough (eg, when typing too fast for the message passing
 * from host to client to keep up). Use a queued state to feed change values at a rate the client
 * can respond.
 */
export function useQueuedState(
  value: FieldValue,
  onInput?: (v: FieldValue) => void | Promise<FieldValue>,
): [string, (s: string) => void] {
  const [localValue, setLocalValue] = useState<FieldValue>('');
  const [queue, setQueue] = useState<FieldValue[]>([]);
  const [, setProcessing] = useState(false);

  // A value will pop off the queue and into onInput. onInput will make a round trip
  // to the client and back until a new 'value' is fed back, triggering another useEffect cycle.
  // This will will continue until the queue exhausts.
  useEffect(() => {
    if (queue.length) {
      const [nextValue, ...restQueue] = queue;
      onInput?.(nextValue);
      setQueue(restQueue);
    } else {
      setProcessing(false);
      if (localValue !== value) setLocalValue(value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const queuedOnChange = useCallback(
    (newValue: FieldValue) => {
      setLocalValue(newValue);

      if (!onInput) {
        return;
      }

      setProcessing((processing) => {
        if (processing) {
          setQueue((_queue) => _queue.concat(newValue));
        } else {
          onInput(newValue);
        }
        return true;
      });
    },
    [onInput],
  );

  return [localValue, queuedOnChange];
}
