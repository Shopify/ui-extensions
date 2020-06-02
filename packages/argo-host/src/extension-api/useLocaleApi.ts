import {useMemo} from 'react';
import {LocaleApi} from '@shopify/argo/extension-api/locale';

export function useLocaleApi(locale: string): LocaleApi {
  return useMemo(
    () => ({
      locale,
    }),
    [locale],
  );
}
