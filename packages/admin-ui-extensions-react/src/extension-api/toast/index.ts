import {isToastApi} from '@shopify/admin-ui-extensions/extension-api';

import {useExtensionApi} from '../utils';

export function useToast() {
  const api = useExtensionApi();
  if (!isToastApi(api)) {
    throw new Error('No toast api found');
  }
  return api.toast;
}
