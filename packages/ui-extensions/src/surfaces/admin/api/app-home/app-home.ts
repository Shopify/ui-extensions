import type {StandardApi} from '../standard/standard';
import type {ExtensionTarget as AnyExtensionTarget} from '../../extension-targets';
import type {ToastApi} from '../toast/toast';
import type {AppApi} from '../app/app';

/**
 * The `AppHomeApi` object provides methods for app home extensions. Access the following properties on the `AppHomeApi` object to authenticate users, query the [GraphQL Admin API](/docs/api/admin-graphql), translate content, handle intents, persist data, display toast notifications, and access app-level data.
 * @publicDocs
 */
export interface AppHomeApi<ExtensionTarget extends AnyExtensionTarget>
  extends StandardApi<ExtensionTarget> {
  /**
   * Displays brief, non-blocking notification messages at the bottom of the page. Use the Toast API to confirm successful actions, report errors, or provide contextual feedback without interrupting the merchant's workflow.
   */
  toast: ToastApi;

  /**
   * Provides access to app-level data and functionality. Use this API to query information about extensions registered for the current app, including their activation status and target information.
   */
  app: AppApi;
}
