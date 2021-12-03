export interface ShowToastOptions {
    /** Display toast in error format. */
    error?: boolean;
}
export interface Toast {
    /**
     * Trigger a toast message to appear.
     * @param content Message to display in the toast.
     * @param options
     */
    show(content: string, options?: ShowToastOptions): void;
}
/**
 * The toast component is a non-disruptive message that appears at the bottom of the interface to provide quick, at-a-glance feedback on the outcome of an action.
 */
export interface ToastApi {
    toast: Toast;
}
export declare function isToastApi(api: any): api is ToastApi;
//# sourceMappingURL=index.d.ts.map