interface ArgoModalAction {
  setContent: (content: string) => void;
  setAction: (onAction: () => void) => void;
}

export interface ModalActionsPayload {
  primaryAction: ArgoModalAction;
  secondaryAction: ArgoModalAction;
  closeModal: () => void;
}

export interface ModalActionsApi {
  modalActions: ModalActionsPayload;
}

export function isModalActionsApi(api: any): api is ModalActionsApi {
  return 'modalActions' in api;
}
