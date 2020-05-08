import React, {useMemo, useState} from 'react';

import {ToastInput, ShowToastPayload, ShowToastOptions} from '@shopify/argo';
import {Toast as PolarisToast} from '@shopify/polaris';

export function useToastInput(): [React.FunctionComponent<{}>, ToastInput] {
  const [payload, setPayload] = useState<ShowToastPayload | undefined>();

  const Toast: React.FunctionComponent<{}> = useMemo(
    () =>
      function Toast() {
        return payload ? (
          <PolarisToast
            content={payload.content}
            error={payload.error}
            onDismiss={() => setPayload(undefined)}
          />
        ) : null;
      },
    [payload],
  );

  const toastInput = useMemo<ToastInput>(
    () => ({
      toast: {
        show: (content: string, options?: ShowToastOptions) => setPayload({content, ...options}),
      },
    }),
    [],
  );

  return useMemo(() => [Toast, toastInput], [Toast, toastInput]);
}
