import {createRemoteComponent} from '@remote-ui/core';

/**
 * Props for the FunctionSettings component, a form container designed
 * for Shopify Function configuration experiences. It provides hooks for
 * saving settings and handling server-side validation errors.
 */
export interface FunctionSettingsProps {
  /**
   * A unique identifier for the function settings form. Use this when you
   * need to reference the form from elements outside its tree.
   */
  id?: string;

  /**
   * A callback that fires when the merchant saves their changes in the
   * admin-rendered function settings experience. If you return a `Promise`,
   * then the Shopify admin waits for it to resolve before committing changes to
   * Shopify's servers. If the promise rejects, then the Shopify admin aborts the save
   * and displays an error using the `message` property of the rejected value.
   */
  onSave?(): void | Promise<void>;

  /**
   * A callback that fires when committing the saved changes to Shopify's
   * servers fails. The `errors` array only contains errors caused by data
   * your extension provided. Network errors and other issues outside your
   * control aren't reported here.
   *
   * Use this callback to highlight the fields that caused the errors and
   * display the error messages to the merchant.
   */
  onError?(errors: FunctionSettingsError[]): void;
}

/**
 * Describes an error that occurred when committing function settings to
 * Shopify's servers. These errors are scoped to data the extension
 * provided and can be displayed directly to the merchant.
 */
export interface FunctionSettingsError {
  /**
   * A machine-readable identifier for the category of error. These match
   * GraphQL error codes as closely as possible. For example, the values
   * returned by the `metafieldsSet` mutation.
   *
   * Learn more about the [MetafieldsSetUserErrorCode](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldsSetUserErrorCode) enum.
   */
  code: string;

  /**
   * A human-readable, translated message describing the error. You can
   * display this directly to the merchant.
   */
  message: string;
}

/**
 * A form container for configuring Shopify Function settings. Integrates
 * with the Shopify admin's save flow and surfaces server-side validation errors.
 */
export const FunctionSettings = createRemoteComponent<
  'FunctionSettings',
  FunctionSettingsProps
>('FunctionSettings');
