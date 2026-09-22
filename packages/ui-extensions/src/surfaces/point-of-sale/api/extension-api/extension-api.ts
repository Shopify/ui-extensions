import type {ApiVersion} from '../../../../shared';

/**
 * The Extension API lets you read metadata about the currently running
 * extension. Use it to implement version-aware behaviour or to identify which
 * target is active when the same extension module is registered against
 * multiple targets. Access these properties through `shopify.extension`.
 *
 * @example
 * <caption>Read the API version, published version, and active target</caption>
 * <description>Display the configured API version, the published app version this build was deployed in, and the active extension target. Use `shopify.extension.apiVersion` for version-aware logic, `shopify.extension.version` to report which build a merchant is running, and `shopify.extension.target` when a single module handles multiple targets.</description>
 * ```jsx
 * const Extension = () => {
 *   const {apiVersion, version, target} = shopify.extension;
 *   return (
 *     <s-page heading="Extension Info">
 *       <s-stack direction="block">
 *         <s-text>API Version: {apiVersion}</s-text>
 *         <s-text>Version: {version ?? 'development build'}</s-text>
 *         <s-text>Target: {target}</s-text>
 *       </s-stack>
 *     </s-page>
 *   );
 * };
 * ```
 * @publicDocs
 */
export interface ExtensionApiContent<T> {
  /**
   * The API version that was set in the extension configuration file.
   *
   * @example '2026-01', '2026-04'
   */
  apiVersion: ApiVersion;
  /**
   * The extension target that is currently running, as configured in the
   * extension's `shopify.extension.toml` file.
   *
   * @example 'pos.home.tile.render', 'pos.home.modal.render'
   */
  target: T;
  /**
   * The name of the published app version that this extension was deployed in.
   * This is the same name shown on the Versions page of your dev dashboard, and
   * the name you choose when you run `shopify app deploy`.
   *
   * Use it to tell which build of your extension a merchant is running. POS
   * caches extension bundles and runs them offline, so a device can stay on an
   * older version for some time after you deploy a new one.
   *
   * This is an opaque name, not a version number. Compare it for equality; don't
   * sort it or read parts out of it.
   *
   * `undefined` when the extension runs from a local development server, because
   * a build that hasn't been deployed has no published version.
   *
   * @example 'restaurant-table-manager-2', 'casa-loyalty-493'
   */
  version?: string;
}

/**
 * The `ExtensionApi` object provides metadata about the currently running
 * extension, including the configured API version, the published app version it
 * was deployed in, and the active extension target. Access these properties
 * through `shopify.extension`.
 * @publicDocs
 */
export interface ExtensionApi<T> {
  extension: ExtensionApiContent<T>;
}
