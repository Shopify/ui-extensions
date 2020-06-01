import {useMemo, DependencyList} from 'react';
import {SessionTokenPayload, SessionTokenApi} from '@shopify/argo';

export function useSessionTokenApi(
  tokenGenerator: SessionTokenPayload['getSessionToken'],
  deps: DependencyList | undefined,
): SessionTokenApi {
  return useMemo(
    () => ({
      sessionToken: {
        getSessionToken: tokenGenerator,
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps,
  );
}
