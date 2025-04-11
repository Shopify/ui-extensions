import type {RenderExtensionTarget} from '../extension-targets';
import type {I18nTranslate} from '../api/standard/standard';

import {useApi} from './api';

/**
 * Returns the `I18nTranslate` interface used to translate strings.
 */
export function useTranslate<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): I18nTranslate {
  const api = useApi<Target>();
  return api.i18n.translate.bind(api.i18n);
}
