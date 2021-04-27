import {useEffect, useState} from 'react';
import {isLocaleApi} from '@shopify/argo-admin';

import {useExtensionApi} from './utils';

export function useLocale() {
  const api = useExtensionApi();
  if (!isLocaleApi(api)) {
    throw new Error('No locale api found');
  }

  const {
    locale: {initialValue, setOnChange},
  } = api;
  const [locale, setLocale] = useState(initialValue);

  useEffect(() => {
    setOnChange((newLocale) => setLocale(newLocale));
  }, [setOnChange]);

  return locale;
}

export {isLocaleApi};
