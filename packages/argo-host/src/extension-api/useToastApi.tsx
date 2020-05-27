import React, {useMemo, useState} from 'react';

import {ToastApi, ShowToastPayload, ShowToastOptions} from '@shopify/argo';
import {Toast as PolarisToast} from '@shopify/polaris';

export function useToastApi(): [React.FunctionComponent<{}>, ToastApi] {
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

  const toastApi = useMemo<ToastApi>(
    () => ({
      toast: {
        show: (content: string, options?: ShowToastOptions) => setPayload({content, ...options}),
      },
    }),
    [],
  );

  return useMemo(() => [Toast, toastApi], [Toast, toastApi]);
}
