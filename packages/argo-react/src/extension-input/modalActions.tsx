import {isModalActionsInput} from '@shopify/argo';

import {useExtensionInput} from './utils';

export function useModalActions() {
  const input = useExtensionInput();
  if (!isModalActionsInput(input)) {
    throw new Error('No modalActions input found');
  }
  return input.modalActions;
}
