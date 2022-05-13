import type {Address, Cart, Customer, CustomSale} from '../types';

/**
 * Access the merchant’s current cart.
 */
export interface CartApi {
  cart: CartApiContent;
}

export type DiscountType = 'Percentage' | 'FixedAmount' | 'Code';

export interface CartApiContent {
  /** Initial value of the Cart when the screen is rendered. */
  initialValue: Cart;

  /** Callback when the cart changes */
  setOnChange(onChange: (cart: Cart) => void): void;

  /** Apply a cart level discount
   * @param type the type of discount applied (example: 'Percentage')
   * @param title the title attributed with the discount
   * @param amount the percentage or fixed monetary amount deducted with the discout
   */
  applyCartDiscount(type: DiscountType, title: string, amount: string): void;

  /** Remove the cart discount */
  removeCartDiscount(): void;

  /** Clear the cart */
  clearCart(): void;

  /** Set the customer in the cart
   * @param customer the customer object to add to the cart
   */
  setCustomer(customer: Customer): void;

  /** Remove the current customer from the cart */
  removeCustomer(): void;

  /** Add a custom sale to the cart
   * @param customSale the custom sale object to add to the cart
   */
  addCustomSale(customSale: CustomSale): void;

  /** Add a line item by variant ID to the cart
   * @param variantId the product variant's numeric ID to add to the cart
   * @param quantity the number of this variant to add to the cart
   */
  addLineItem(variantId: number, quantity: number): void;

  /** Remove the line item at this uuid from the cart
   * @param uuid the uuid of the line item that should be removed
   */
  removeLineItem(uuid: string): void;

  /** Adds custom properties to the cart
   * @param properties the custom key to value object to attribute to the cart
   */
  addCartProperties(properties: Record<string, string>): void;

  /** Removes the specified cart properties
   * @param keys the collection of keys to be removed from the cart properties
   */
  removeCartProperties(keys: string[]): void;

  /** Adds custom properties to the specified line item
   * @param uuid the uuid of the line item to which the properties should be stringd
   * @param properties the custom key to value object to attribute to the line item
   */
  addLineItemProperties(uuid: string, properties: Record<string, string>): void;

  /** Removes the specified line item properties
   * @param uuid the uuid of the line item to which the properties should be removed
   * @param keys the collection of keys to be removed from the line item properties
   */
  removeLineItemProperties(uuid: string, keys: string[]): void;

  /** Add a discount on a line item to the cart
   * @param uuid the uuid of the line item that should receive a discount
   * @param type the type of discount applied (example: 'Percentage')
   * @param title the title attributed with the discount
   * @param amount the percentage or fixed monetary amount deducted with the discout
   */
  setLineItemDiscount(
    uuid: number,
    type: DiscountType,
    title: string,
    amount: string,
  ): void;

  /** Remove all discounts from a line item
   * @param uuid the uuid of the line item whose discounts should be removed
   */
  removeLineItemDiscount(uuid: string): void;

  /** Add an address to the customer (Customer must be present)
   * @param address the address object to add to the customer in cart
   */
  addAddress(address: Address): void;

  /** Update an address associated to the customer in the cart
   * @param index the index of the address to update.
   * @param address the updated address object.
   */
  setAddress(index: number, address: Address): void;
}
