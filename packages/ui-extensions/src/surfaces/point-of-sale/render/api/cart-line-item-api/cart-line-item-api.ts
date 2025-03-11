export interface CartLineItemApi {
  cartLineItem: CartLineItemApiContent;
}

export interface CartLineItemApiContent {
  /**
   * The unique identifier for the cart line item.
   */
  uuid: string;
}
