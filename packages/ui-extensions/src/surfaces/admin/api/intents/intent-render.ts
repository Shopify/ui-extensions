import type {StandardRenderingExtensionApi} from '../standard/standard-rendering';
import type {ExtensionTarget as AnyExtensionTarget} from '../../extension-targets';
import type {IntentQuery, IntentResponseApi} from './intents';

/**
 * The data provided to an intent render extension, containing the intent that triggered the extension.
 * @publicDocs
 */
export interface IntentRenderData {
  /**
   * The intent that triggered this extension, including the action, resource type, and any additional input data.
   */
  intent: IntentQuery;
}

/**
 * The intents API available to intent render extensions. Unlike other targets where `response` is optional, intent render extensions always run inside an intent workflow so `response` is guaranteed.
 * @publicDocs
 */
export interface IntentRenderIntents {
  /**
   * Resolves the current intent from within the invoked extension. Use `ok()` to signal success, `error()` to report failure, or `closed()` to indicate the merchant cancelled.
   */
  response: IntentResponseApi;
}

/**
 * The `IntentRenderApi` object provides methods for extensions that render in response to an app intent. Access the intent data to determine what action the merchant requested and use `intents.response` to resolve the intent when complete.
 * @publicDocs
 */
export interface IntentRenderApi<ExtensionTarget extends AnyExtensionTarget>
  extends StandardRenderingExtensionApi<ExtensionTarget> {
  /**
   * The data associated with the intent that triggered this extension.
   */
  data: IntentRenderData;

  /**
   * Provides methods for resolving the current intent. Always available for intent render extensions since they are always invoked inside an intent workflow.
   */
  intents: IntentRenderIntents;
}
