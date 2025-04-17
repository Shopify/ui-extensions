import type {RenderCustomerAccountExtensionTarget} from '../extension-targets';
import type {I18n} from '../api';

import {useApi} from './api';

/**
 Returns utilities for translating content and formatting values
    according to the current localization of the user.
 */
export function useI18n<
  Target extends RenderCustomerAccountExtensionTarget = RenderCustomerAccountExtensionTarget,
>(): I18n {
  return useApi<Target>().i18n;
}
