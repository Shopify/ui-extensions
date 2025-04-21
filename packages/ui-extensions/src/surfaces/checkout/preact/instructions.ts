import type {CartInstructions} from '../api/standard/standard';
import type {RenderExtensionTarget} from '../extension-targets';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the cart instructions used to create the checkout and possibly limit extension capabilities.
 */
export function useInstructions<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): CartInstructions {
  return useSubscription(useApi<Target>().instructions);
}
