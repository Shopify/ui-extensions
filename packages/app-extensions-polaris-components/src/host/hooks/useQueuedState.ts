import {useState, useEffect} from 'react';

export type FieldValue = string; /* | number | boolean; */

export function useQueuedState(
  value: FieldValue,
  onChange: (v: FieldValue) => void | Promise<FieldValue>,
): [string, (s: string) => void] {
  const [localValue, setLocalValue] = useState<FieldValue>('');
  const [queue, setQueue] = useState<FieldValue[]>([]);
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    setProcessing(false);
    if (localValue !== value && !queue.length) setLocalValue(value);
    const reducedArray = [...queue];
    reducedArray.shift();
    setQueue(reducedArray);
    if (reducedArray[0]) onChange(reducedArray[0]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const queuedOnChange = (newValue: FieldValue) => {
    setLocalValue(newValue);
    const addedArray = [...queue];
    addedArray.push(newValue);
    setQueue(addedArray);
    if (!processing) {
      setProcessing(true);
      onChange(newValue);
    }
  };

  return [localValue, queuedOnChange];
}
