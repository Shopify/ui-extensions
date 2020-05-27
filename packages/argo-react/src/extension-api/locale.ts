import {isLocaleApi} from '@shopify/argo';

import {useExtensionApi} from './utils';

export function useLocale() {
  const api = useExtensionApi();
  if (!isLocaleApi(api)) {
    throw new Error('No locale api found');
  }

  const {locale} = api;
  return locale;
}
