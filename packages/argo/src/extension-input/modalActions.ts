interface ArgoModalAction {
  setContent: (content: string) => void;
  setAction: (onAction: () => void) => void;
}

export interface ModalActions {
  primaryAction: ArgoModalAction;
  secondaryAction: ArgoModalAction;
  closeModal: () => void;
}

export interface ModalActionsInput {
  modalActions: ModalActions;
}

export function isModalActionsInput(input: any): input is ModalActionsInput {
  return 'modalActions' in input;
}
