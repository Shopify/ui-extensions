import type {RenderExtensionTarget} from '../extension-targets';
import type {Storage} from '../api';

import {useApi} from './api';

/**
 * Returns the key-value `Storage` interface for the extension target.
 */
export function useStorage<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): Storage {
  return useApi<Target>().storage;
}
