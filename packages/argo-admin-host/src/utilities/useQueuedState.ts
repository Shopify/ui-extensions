import {useState, useEffect} from 'react';

export type FieldValue = string; /* | number | boolean; */

export function useQueuedState(
  value: FieldValue,
  onChange: (v: FieldValue) => void | Promise<FieldValue>,
): [string, (s: string) => void] {
  const [localValue, setLocalValue] = useState<FieldValue>('');
  const [queue, setQueue] = useState<FieldValue | undefined>();
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    setProcessing(false);
    if (localValue !== value && !queue) setLocalValue(value);
    if (queue != null) onChange(queue);
    setQueue(undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const queuedOnChange = (newValue: FieldValue) => {
    setLocalValue(newValue);
    setQueue(newValue);
    if (!processing) {
      setProcessing(true);
      onChange(newValue);
    }
  };

  return [localValue, queuedOnChange];
}
