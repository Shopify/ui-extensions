export interface SessionToken {
    /** Get a fresh session token. */
    getSessionToken: () => Promise<string | undefined>;
}
/**
 * Get a fresh session token for communication with your app's backend service.
 * Calls to Shopify APIs must be made by your app’s backend service.
 */
export interface SessionTokenApi {
    sessionToken: SessionToken;
}
export declare function isSessionTokenApi(api: any): api is SessionTokenApi;
//# sourceMappingURL=index.d.ts.map