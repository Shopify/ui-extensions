import {useExtensionInput} from './utils';

export interface LocaleInput {
  locale: string;
}

function isLocaleInput(input: any): input is LocaleInput {
  return 'locale' in input && typeof input['locale'] === 'string';
}

export function useLocale() {
  const input = useExtensionInput();
  if (!isLocaleInput(input)) {
    throw new Error('No locale input found');
  }

  const {locale} = input;
  return locale;
}
