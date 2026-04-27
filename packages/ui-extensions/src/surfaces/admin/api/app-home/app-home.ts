import type {StandardApi} from '../standard/standard';
import type {ExtensionTarget as AnyExtensionTarget} from '../../extension-targets';
import type {ToastApi} from '../toast/toast';

/**
 * The `AppHomeApi` object provides methods for app home extensions. Access the following properties on the `AppHomeApi` object to authenticate users, query the [GraphQL Admin API](/docs/api/admin-graphql), translate content, handle intents, persist data, and display toast notifications.
 * @publicDocs
 */
export interface AppHomeApi<ExtensionTarget extends AnyExtensionTarget>
  extends StandardApi<ExtensionTarget> {
  /**
   * Displays brief, non-blocking notification messages at the bottom of the page. Use the Toast API to confirm successful actions, report errors, or provide contextual feedback without interrupting the merchant's workflow.
   */
  toast: ToastApi;
}
