import {isLocaleApi} from '../../extension-api/locale';
import {useExtensionApi} from './utils';

export function useLocale() {
  const api = useExtensionApi();
  if (!isLocaleApi(api)) {
    throw new Error('No locale api found');
  }
  return api.locale;
}
