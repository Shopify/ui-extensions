import {isSessionTokenApi} from '../../extension-api';
import {useExtensionApi} from './utils';

export function useSessionToken() {
  const api = useExtensionApi();
  if (!isSessionTokenApi(api)) {
    throw new Error('No sessionToken api found');
  }
  return api.sessionToken;
}
