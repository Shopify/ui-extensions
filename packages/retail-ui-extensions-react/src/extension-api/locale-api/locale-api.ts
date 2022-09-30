import {useEffect, useState} from 'react';
import {useExtensionApi} from '../utils';

const isLocaleApi = (api: any): boolean => {
  return 'locale' in api;
};

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
    setOnChange((newLocale: string) => setLocale(newLocale));
  }, [setOnChange]);

  return locale;
}
