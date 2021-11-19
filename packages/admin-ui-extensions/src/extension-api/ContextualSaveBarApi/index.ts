export interface ContextualSaveBarApi {
  contextualSaveBar: {
    visible: boolean;
    setVisible: (visible: boolean) => void;
    setSaveAction(action: () => void): void;
    setDiscardAction(action: () => void): void;
  };
}

export function isContextualSaveBarApi(api: any): api is ContextualSaveBarApi {
  return 'contextualSaveBar' in api;
}
