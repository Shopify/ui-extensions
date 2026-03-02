/**
 * The `Data` object provides access to currently viewed or selected resources in the admin context.
 * @publicDocs
 */
export interface Data {
  /**
   * An array of currently viewed or selected resource identifiers. Use this to access the IDs of items in the current context, such as selected products in an index page or the product being viewed on a details page. The available IDs depend on the extension target and user interactions.
   */
  selected: {id: string}[];
}
