export interface Options {
    https: boolean;
    webSocket: {
        host: string;
        port: number;
        path: string;
    };
}
declare global {
    const __hotClientOptions__: Options;
    interface WindowOrWorkerGlobalScope {
        readonly shopify: {
            reload(): void;
        };
    }
}
export {};
//# sourceMappingURL=worker.d.ts.map