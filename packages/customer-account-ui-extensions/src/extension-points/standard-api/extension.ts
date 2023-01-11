import type {StatefulRemoteSubscribable} from '@remote-ui/async-subscription';

export type Capability = 'network_access';

export interface Extension {
  /**
   * The published version of the running extension point.
   *
   * For extensions installed on a development store the value is always `0.0.0`.
   * For unpublished extensions, the value is `undefined`.
   *
   * @example 3.0.10
   */
  version?: string;

  /**
   * The URL to the script that started the extension point.
   */
  scriptUrl: string;

  /**
   * Whether your extension is currently rendered to the screen.
   *
   * Shopify might render your extension before it's visible in the UI,
   * typically to pre-render extensions that will appear on a later step of the
   * checkout.
   *
   * Your extension might also continue to run after the buyer has navigated away
   * from where it was rendered. The extension continues running so that
   * your extension is immediately available to render if the buyer navigates back.
   */
  rendered: StatefulRemoteSubscribable<boolean>;

  /**
   * The allowed capabilities of the extension, defined
   * in your `shopify.ui.extension.toml` file .
   *
   * `network_access`:
   * You must [request access](https://shopify.dev/api/checkout-extensions/checkout/configuration#complete-a-request-for-network-access)
   * to make network calls.
   */
  capabilities: StatefulRemoteSubscribable<Capability[]>;
}
