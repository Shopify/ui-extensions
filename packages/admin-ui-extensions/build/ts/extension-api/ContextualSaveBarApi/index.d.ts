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
export declare function isContextualSaveBarApi(api: any): api is ContextualSaveBarApi;
export {};
//# sourceMappingURL=index.d.ts.map