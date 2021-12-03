import { useMemo } from 'react';
import { CheckoutUIExtensionError } from '../errors';
import { useExtensionApi } from './api';
import { useSubscription } from './subscription';

/**
 * Returns the metafields configured via extension.config.yml.
 * @arg {AppMetafieldFilters} - filter the list of returned metafields
 */
export function useAppMetafields() {
  var filters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var appMetafields = useSubscription(useExtensionApi().appMetafields);
  return useMemo(function () {
    if (filters.key && !filters.namespace) {
      throw new CheckoutUIExtensionError('You must pass in a namespace with a key');
    }

    var filterKeys = Object.keys(filters);

    if (filterKeys.length) {
      return appMetafields.filter(function (app) {
        return filterKeys.every(function (key) {
          if (key === 'id' || key === 'type') {
            return app.target[key] === filters[key];
          }

          return app.metafield[key] === filters[key];
        });
      });
    }

    return appMetafields;
  }, [filters, appMetafields]);
}