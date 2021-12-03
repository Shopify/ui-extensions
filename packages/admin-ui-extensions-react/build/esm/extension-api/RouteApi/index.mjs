import { useExtensionApi } from '../utils';
export function isRouterApi(api) {
  return 'history' in api;
}
export function useRouter() {
  var api = useExtensionApi();

  if (!isRouterApi(api)) {
    throw new Error('No router api found');
  }

  return api.history;
}