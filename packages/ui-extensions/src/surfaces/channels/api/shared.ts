export interface ValidationError {
  /**
   * Error message to be displayed to the buyer.
   */
  message: string;
  /**
   * The admin product details UI field that the error is associated with.
   *
   * Example: `$.product.title`
   *
   * See the [supported targets](https://shopify.dev/docs/api/functions/reference/product-details/product-details-configuration/graphql#supported-targets)
   * for more information.
   */
  target?: string;
}

export interface Attribute {
  /**
   * The key for the attribute.
   */
  key: string;

  /**
   * The value for the attribute.
   */
  value: string;
}

export interface Data {
  /**
   * Information about the currently viewed or selected items.
   */
  selected: {id: string}[];
}
