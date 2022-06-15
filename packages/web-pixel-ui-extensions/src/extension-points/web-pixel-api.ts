export type Version = 'unstable';

/**
 * The following APIs are provided to the Pixel extension point.
 */
export interface WebPixelApi {
  analytics: {
    subscribe(event: string, callback: (data: any) => void): void;
  };
  config: Record<string, unknown>;
  context: {
    readonly cookie: {
      get: () => Promise<string>;
      set: (value: string) => Promise<string>;
    };
    readonly origin: {
      get: () => Promise<string>;
    };
    readonly referrer: {
      get: () => Promise<string>;
    };
  };
}
