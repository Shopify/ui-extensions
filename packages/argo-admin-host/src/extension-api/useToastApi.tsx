import React, {useMemo, useState} from 'react';
import {ToastApi} from '@shopify/argo-admin/extension-api/toast';
import {Toast as PolarisToast} from '@shopify/polaris';

interface ToastPayload {
  content: string;
  error?: boolean;
}

export function useToastApi(): [React.FunctionComponent<{}>, ToastApi] {
  const [payload, setPayload] = useState<ToastPayload | undefined>();

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
        show: (content, options) => setPayload({content, ...options}),
      },
    }),
    [],
  );

  return useMemo(() => [Toast, toastApi], [Toast, toastApi]);
}
