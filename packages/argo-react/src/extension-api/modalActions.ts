import {isModalActionsApi} from '@shopify/argo';

import {useExtensionApi} from './utils';

export function useModalActions() {
  const api = useExtensionApi();
  if (!isModalActionsApi(api)) {
    throw new Error('No modalActions api found');
  }
  return api.modalActions;
}
