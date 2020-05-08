import {isToastInput} from '@shopify/argo';

import {useExtensionInput} from './utils';

export function useToast() {
  const input = useExtensionInput();
  if (!isToastInput(input)) {
    throw new Error('No toast input found');
  }
  return input.toast;
}
