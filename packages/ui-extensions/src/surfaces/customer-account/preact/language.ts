import type {RenderExtensionTarget} from '../extension-targets';
import type {Language} from '../api';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the current language of the checkout, and automatically re-renders
 * your component if the language changes.
 */
export function useLanguage<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): Language {
  const {localization} = useApi<Target>();

  return useSubscription(localization.language);
}
