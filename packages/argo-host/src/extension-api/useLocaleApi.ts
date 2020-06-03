import {useMemo, useState} from 'react';
import {LocaleApi} from '@shopify/argo/extension-api/locale';
import {retain} from '@shopify/remote-ui-core';
import {useEffect} from 'react';

type Callback = {
  onLocaleChange: (locale: string) => void;
};

export function useLocaleApi(locale: string): LocaleApi {
  const [initialValue] = useState(locale);
  const [callback, setCallback] = useState<Callback>();

  useEffect(() => {
    if (!callback) {
      return callback;
    }
    callback.onLocaleChange(locale);
  }, [callback, locale]);

  return useMemo(
    () => ({
      locale: {
        initialValue,
        setOnChange: onLocaleChange => {
          retain(onLocaleChange);
          setCallback({onLocaleChange});
        },
      },
    }),
    [initialValue],
  );
}
