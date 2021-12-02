export interface ContextualSaveBarApi {
  contextualSaveBar: {
    visible: boolean;
    setVisible: (visible: boolean) => void;
    setSaveAction(action: Action): void;
    setDiscardAction(action: Action): void;
  };
}

interface Action {
  onAction: () => void;
  disabled: boolean;
}

export function isContextualSaveBarApi(api: any): api is ContextualSaveBarApi {
  return 'contextualSaveBar' in api;
}
