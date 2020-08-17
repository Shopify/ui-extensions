import {useMemo, useState, useEffect} from 'react';
import {LocaleApi} from '@shopify/argo-admin/extension-api/locale';
import {retain} from '@remote-ui/core';

export function useLocaleApi(locale: string): LocaleApi {
  const [initialValue] = useState(locale);
  const [onLocaleChange, setOnLocaleChange] = useState<(locale: string) => void>();

  useEffect(() => {
    if (!onLocaleChange) {
      return;
    }
    onLocaleChange(locale);
  }, [onLocaleChange, locale]);

  return useMemo(
    () => ({
      locale: {
        initialValue,
        setOnChange: (onLocaleChange) => {
          retain(onLocaleChange);
          setOnLocaleChange(() => onLocaleChange);
        },
      },
    }),
    [initialValue],
  );
}
