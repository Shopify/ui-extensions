import {Extension} from './extension';
import {I18n, Localization} from './localization';
import {Storage} from './storage';
import type {ExtensionPoint} from '../extension-points';

export type RendererVersion = 'unstable';

/**
 * The following APIs are provided to all extension points.
 */
export interface StandardApi<
  TExtensionPoint extends ExtensionPoint = ExtensionPoint,
> {
  customerApi: {
    getEndpoint(version: 'unstable'): Promise<string>;
    getAccessToken(): Promise<string>;
  };

  extensionPoint: TExtensionPoint;

  /**
   * Meta information about the extension.
   */
  extension: Extension;

  /**
   * The renderer version being used for the extension.
   *
   * @example 'unstable'
   */
  version: RendererVersion;

  /**
   * Details about the language of the buyer.
   */
  localization: Localization;

  /**
   * Utilities for translating content and formatting values according to the current `localization`
   * of the user.
   */
  i18n: I18n;

  router: {
    getExtensionFullPageUrl(relative: string): Promise<string>;
    navigate(to: string): Promise<void>;
  };

  /**
   * An authenticated redirect is a way to seamlessly integrate 3P apps
   * built outside of self-serve into the self-serve experience. The 3P app accepts this data,
   * bypasses any authentication screens on their side, and sends the user directly into
   * their app to complete the task at hand. Once the task is complete, the app routes the user back into self-serve.
   */
  authenticatedRedirect: {
    getStartUrl(): Promise<string>;
  };

  /**
   * Key-value storage for the extension point.
   */
  storage: Storage;

  /**
   * Methods to interact with the extension's UI.
   */
  ui: {
    overlay: {
      close(overlayId: string): void;
    };
  };
}
