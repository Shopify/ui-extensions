import { useExtensionApi } from './api';
import { useSubscription } from './subscription';
/**
 * Returns the current locale of the checkout, and automatically re-renders
 * your component if the locale changes.
 */

export function useLocale() {
  var _useExtensionApi = useExtensionApi(),
      locale = _useExtensionApi.locale;

  return useSubscription(locale);
}