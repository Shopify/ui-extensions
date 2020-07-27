import {isToastApi} from '@shopify/argo-admin/extension-api';
import {useExtensionApi} from './utils';

export function useToast() {
  const api = useExtensionApi();
  if (!isToastApi(api)) {
    throw new Error('No toast api found');
  }
  return api.toast;
}
