import type {RenderOrderStatusExtensionTarget} from '../extension-targets';
import type {AuthenticationState} from '../api';

import {useSubscription} from './subscription';
import {useApi} from './api';

/**
 * Returns authentication state of Order status page.
 */
export function useAuthenticationState<
  Target extends RenderOrderStatusExtensionTarget = RenderOrderStatusExtensionTarget,
>(): AuthenticationState {
  return useSubscription(useApi<Target>().authenticationState);
}
