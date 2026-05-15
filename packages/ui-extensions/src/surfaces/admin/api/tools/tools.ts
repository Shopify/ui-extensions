/**
 * A handler function invoked by the platform when a registered tool is called.
 * The handler receives an `input` object that matches the tool's declared input
 * JSON schema and must return (synchronously or asynchronously) an object that
 * matches the declared output JSON schema.
 *
 * Generated tool typings narrow the `input` and return value of this handler
 * for each registered tool name. This base signature is the generic fallback
 * used before code generation has run, or for tools that aren't yet declared
 * in your extension configuration.
 *
 * @publicDocs
 */
export type ToolHandler = (
  input: Record<string, any>,
) => Record<string, any> | Promise<Record<string, any>>;

/**
 * The `Tools` object provides methods for registering and removing runtime
 * handlers for app tools declared in your extension configuration. Use this
 * API to expose app data lookups and app actions that
 * [Sidekick](/docs/apps/build/sidekick/build-app-data) can invoke on behalf of
 * merchants.
 *
 * The base `register` signature accepts any tool name and a generic handler.
 * When you run `dev`, the CLI generates a typed `register` overload for every
 * tool declared in `shopify.extension.toml`, narrowing both the accepted name
 * and the handler's `input`/return types. Use the `WithGeneratedTools` helper
 * to merge the generated typings into your target's API.
 *
 * @publicDocs
 */
export interface Tools {
  /**
   * Registers a tool handler for your app. If a handler with the same name is
   * already registered, it is replaced. Returns a cleanup function that
   * unregisters the handler.
   *
   * @param name - The tool name as declared in your extension configuration.
   * @param handler - The function invoked when the tool is called.
   * @returns A function that unregisters the handler when invoked.
   */
  register: (name: string, handler: ToolHandler) => () => void;

  /**
   * Unregisters a previously registered tool handler. Calling this for a tool
   * that isn't registered is a no-op.
   *
   * @param name - The tool name to unregister.
   */
  unregister: (name: string) => void;

  /**
   * Unregisters every tool handler currently registered by your extension.
   */
  clear: () => void;
}
