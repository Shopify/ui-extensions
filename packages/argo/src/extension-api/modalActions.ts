interface ArgoModalAction {
  setContent: (content: string) => void;
  setAction: (onAction: () => void) => void;
}

export interface ModalActions {
  primaryAction: ArgoModalAction;
  secondaryAction: ArgoModalAction;
  closeModal: () => void;
}

export interface ModalActionsApi {
  modalActions: ModalActions;
}

export function isModalActionsApi(api: any): api is ModalActionsApi {
  return 'modalActions' in api;
}
