import type {RenderExtensionTarget} from '../extension-targets';
import type {Shop} from '../api/standard/standard';

import {useApi} from './api';

/**
 * Returns the `Shop` where the checkout is taking place.
 */
export function useShop<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): Shop {
  return useApi<Target>().shop;
}
