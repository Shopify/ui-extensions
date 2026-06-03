import type {StandardApi} from '../standard/standard';
import type {ExtensionTarget as AnyExtensionTarget} from '../../extension-targets';
import type {ToastApi} from '../toast/toast';
import type {AppApi} from '../app/app';
import type {LoadingApi} from '../loading/loading';
import type {Tools} from '../tools/tools';
import type {
  IntentInvokeApi,
  IntentQueryOptions,
  IntentResponseApi,
} from '../intents/intents';

/**
 * The current link intent delivered to an app home extension. The admin
 * pushes a new value into `request` whenever a link intent is dispatched to
 * your app, and resets it to `null` when no intent is active.
 *
 * The shape is signal-like (`value` + `subscribe`) so the running extension
 * can observe a stream of intents over its lifetime, mirroring the behaviour
 * the CLI's generated typings already expect via `WithGeneratedIntents`.
 *
 * @publicDocs
 */
export interface AppHomeIntentRequest {
  /**
   * The intent that's currently being delivered to the extension, or `null`
   * when no intent is active.
   */
  readonly value: IntentQueryOptions | null;
  /**
   * Subscribes to changes in the active intent. The callback is invoked with
   * the new value whenever the admin dispatches a new intent or clears it.
   * Returns a function that unsubscribes the callback.
   */
  subscribe: (
    callback: (value: IntentQueryOptions | null) => void,
  ) => () => void;
}

/**
 * The intents API available to app home extensions. It exposes a signal-like
 * `request` that streams link intents into the long-running extension. Inspect
 * `request.value` for information about the active intent.
 *
 * @publicDocs
 */
export interface AppHomeIntents {
  /**
   * The current link intent delivered to the extension. Subscribe to receive
   * new intents over the lifetime of the extension.
   */
  request: AppHomeIntentRequest;
  /**
   * Resolves the current intent. Available only while `request.value` is
   * non-null; the runtime swaps in a fresh handle for each new intent.
   */
  response?: IntentResponseApi;
  /**
   * Launches an intent workflow for creating or editing Shopify resources.
   */
  invoke?: IntentInvokeApi;
}

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
   * Receives [link intents](/docs/apps/build/sidekick/build-app-data) dispatched to the app home target and resolves them when complete. Subscribe to `intents.request` to be notified each time the admin navigates the merchant to your app via a link intent, and call `intents.response.ok()` / `error()` / `closed()` to resolve the active intent.
   *
   * When you run `dev`, the CLI generates typed variants for every intent declared in `shopify.extension.toml`. Use the `WithGeneratedIntents` helper type to narrow `request.value` and `response.ok` to the generated payloads in your app code.
   */
  intents: AppHomeIntents;

  /**
   * Registers runtime handlers for app tools declared in your extension configuration. Use this to expose app data lookups and app actions to [Sidekick](/docs/apps/build/sidekick/build-app-data), including link intents that drive the navigate modality from the app home target.
   *
   * When you run `dev`, the CLI generates typed `register` overloads for every tool declared in `shopify.extension.toml`. Use the `WithGeneratedTools` helper type to narrow this property to the generated overloads in your app code.
   */
  tools: Tools;
}
