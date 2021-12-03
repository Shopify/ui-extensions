import { useExtensionApi } from './api';
export function useApplySignedChange() {
  return useExtensionApi().applySignedChange;
}