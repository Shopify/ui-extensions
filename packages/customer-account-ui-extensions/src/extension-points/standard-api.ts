import type {StatefulRemoteSubscribable} from '@remote-ui/async-subscription';

export type Version = 'unstable';

export interface Language {
  /**
   * The BCP-47 language tag. It may contain a dash followed by an ISO 3166-1 alpha-2 region code.
   *
   * @example 'en' for English, or 'en-US' for English local to United States.
   * @see https://en.wikipedia.org/wiki/IETF_language_tag
   * @see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
   */
  isoCode: string;
}

export interface Localization {
  /**
   * The language the buyer sees in the customer account hub.
   */
  language: StatefulRemoteSubscribable<Language>;
}

/**
 * The following APIs are provided to all extension points.
 */
export interface StandardApi {
  customerApi: {
    getEndpoint(version: 'unstable'): Promise<string>;
    getAccessToken(): Promise<string>;
  };
  /**
   * Details about the language of the buyer. More could be added in the future.
   */
  localization: Localization;
  router: {
    getExtensionFullPageUrl(relative: string): Promise<string>;
    navigate(to: string): Promise<void>;
  };
}
