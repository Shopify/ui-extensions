export type Version = 'unstable';

/**
 * The following APIs are provided to all extension points.
 */
export interface StandardApi {
  customerApi: {
    getEndpoint(version: 'unstable'): Promise<string>;
    getAccessToken(): Promise<string>;
  };
}
