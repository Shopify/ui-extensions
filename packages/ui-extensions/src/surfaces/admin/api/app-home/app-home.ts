import type {StandardApi} from '../standard/standard';
import type {ExtensionTarget as AnyExtensionTarget} from '../../extension-targets';
import type {ToastApi} from '../toast/toast';
import type {AppApi} from '../app/app';
import type {LoadingApi} from '../loading/loading';
import type {Tools} from '../tools/tools';

/**
 * The `AppHomeApi` object provides methods for app home extensions. Access the following properties on the `AppHomeApi` object to authenticate users, query the [GraphQL Admin API](/docs/api/admin-graphql), translate content, handle intents, persist data, display toast notifications, control the Admin page-level loading indicator, and access app-level data.
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

  /**
   * Sets the Admin page-level loading indicator. Call `loading(true)` to show the loading indicator while your app home extension performs an asynchronous task. Call `loading(false)`, or call `loading()` without an argument, to hide it when the task completes.
   */
  loading: LoadingApi;

  /**
   * Registers runtime handlers for app tools declared in your extension configuration. Use this to expose app data lookups and app actions to [Sidekick](/docs/apps/build/sidekick/build-app-data), including link intents that drive the navigate modality from the app home target.
   *
   * When you run `dev`, the CLI generates typed `register` overloads for every tool declared in `shopify.extension.toml`. Use the `WithGeneratedTools` helper type to narrow this property to the generated overloads in your app code.
   */
  tools: Tools;
}
