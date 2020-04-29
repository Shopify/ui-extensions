import {isLocaleInput} from '@shopify/argo';

import {useExtensionInput} from './utils';

export function useLocale() {
  const input = useExtensionInput();
  if (!isLocaleInput(input)) {
    throw new Error('No locale input found');
  }

  const {locale} = input;
  return locale;
}
