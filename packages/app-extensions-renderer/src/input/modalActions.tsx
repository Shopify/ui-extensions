import {useExtensionInput} from './utils';

interface ArgoModalAction {
  setContent: (content: string) => void;
  setAction: (f: () => void) => void;
}

export interface ModalActions {
  primaryAction: ArgoModalAction;
  secondaryAction: ArgoModalAction;
  closeModal: () => void;
}

export interface ModalActionsInput {
  modalActions: ModalActions;
}

function isModalActionsInput(input: any): input is ModalActionsInput {
  return 'modalActions' in input;
}

export function useModalActions() {
  const input = useExtensionInput();
  if (!isModalActionsInput(input)) {
    throw new Error('No modalActions input found');
  }
  return input.modalActions;
}
