import {useMemo} from 'react';
import {LocaleInput} from '@shopify/argo';

export function useLocaleInput(locale: string): LocaleInput {
  return useMemo(
    () => ({
      locale,
    }),
    [locale],
  );
}
