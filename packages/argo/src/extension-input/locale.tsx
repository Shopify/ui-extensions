export interface LocaleInput {
  locale: string;
}

export function isLocaleInput(input: any): input is LocaleInput {
  return 'locale' in input && typeof input['locale'] === 'string';
}
