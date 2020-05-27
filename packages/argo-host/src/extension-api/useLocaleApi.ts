import {useMemo} from 'react';
import {LocaleApi} from '@shopify/argo';

export function useLocaleApi(locale: string): LocaleApi {
  return useMemo(
    () => ({
      locale,
    }),
    [locale],
  );
}
