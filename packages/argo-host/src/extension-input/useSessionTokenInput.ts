import {useMemo, DependencyList} from 'react';
import {SessionToken, SessionTokenInput} from '@shopify/argo';

export function useSessionTokenInput(
  tokenGenerator: SessionToken['getSessionToken'],
  deps: DependencyList | undefined,
): SessionTokenInput {
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
