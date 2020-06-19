import {useMemo, DependencyList} from 'react';
import {SessionToken, SessionTokenApi} from '@shopify/argo-admin/extension-api/sessionToken';

export function useSessionTokenApi(
  tokenGenerator: SessionToken['getSessionToken'],
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
