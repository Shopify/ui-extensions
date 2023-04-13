import type {RemoteSubscribable} from '@remote-ui/async-subscription';
import type {Address, Cart, Customer, CustomSale} from '../types';

/**
 * Access and modify the merchant’s current cart.
 */
export interface CartApi {
  cart: CartApiContent;
}

export type DiscountType =
  | 'Percentage'
  | 'FixedAmount'
  | 'PriceOverride'
  | 'Code';

export interface CartApiContent {
  /** Initial value and a callback to subsribe to value changes. Current supports only one subscription.
   * You can utilize `makeStatefulSubscribable` on a `RemoteSubscribable` to implement multiple subscriptions.
   * Using `makeStatefulSubscribable` or the corresponding hooks counts as a subscription.
   */
  subscribable: RemoteSubscribable<Cart>;

  /** Apply a cart level discount
   * @param type the type of discount applied (example: 'Percentage')
   * @param title the title attributed with the discount
   * @param amount the percentage or fixed monetary amount deducted with the discout
   */
  applyCartDiscount(
    type: DiscountType,
    title: string,
    amount: string,
  ): Promise<void>;

  /** Remove the cart discount */
  removeCartDiscount(): Promise<void>;

  /** Clear the cart */
  clearCart(): Promise<void>;

  /** Set the customer in the cart
   * @param customer the customer object to add to the cart
   */
  setCustomer(customer: Customer): Promise<void>;

  /** Remove the current customer from the cart */
  removeCustomer(): Promise<void>;

  /** Add a custom sale to the cart
   * @param customSale the custom sale object to add to the cart
   */
  addCustomSale(customSale: CustomSale): Promise<void>;

  /** Add a line item by variant ID to the cart
   * @param variantId the product variant's numeric ID to add to the cart
   * @param quantity the number of this variant to add to the cart
   */
  addLineItem(variantId: number, quantity: number): Promise<void>;

  /** Remove the line item at this uuid from the cart
   * @param uuid the uuid of the line item that should be removed
   */
  removeLineItem(uuid: string): Promise<void>;

  /** Adds custom properties to the cart
   * @param properties the custom key to value object to attribute to the cart
   */
  addCartProperties(properties: Record<string, string>): Promise<void>;

  /** Removes the specified cart properties
   * @param keys the collection of keys to be removed from the cart properties
   */
  removeCartProperties(keys: string[]): Promise<void>;

  /** Adds custom properties to the specified line item
   * @param uuid the uuid of the line item to which the properties should be stringd
   * @param properties the custom key to value object to attribute to the line item
   */
  addLineItemProperties(
    uuid: string,
    properties: Record<string, string>,
  ): Promise<void>;

  /** Removes the specified line item properties
   * @param uuid the uuid of the line item to which the properties should be removed
   * @param keys the collection of keys to be removed from the line item properties
   */
  removeLineItemProperties(uuid: string, keys: string[]): Promise<void>;

  /** Add a discount on a line item to the cart
   * @param uuid the uuid of the line item that should receive a discount
   * @param type the type of discount applied (example: 'Percentage')
   * @param title the title attributed with the discount
   * @param amount the percentage or fixed monetary amount deducted with the discout
   */
  setLineItemDiscount(
    uuid: string,
    type: DiscountType,
    title: string,
    amount: string,
  ): Promise<void>;

  /** Remove all discounts from a line item
   * @param uuid the uuid of the line item whose discounts should be removed
   */
  removeLineItemDiscount(uuid: string): Promise<void>;

  /** Add an address to the customer (Customer must be present)
   * @param address the address object to add to the customer in cart
   */
  addAddress(address: Address): Promise<void>;

  /**
   * Delete an address from the customer (Customer must be present)
   * @param addressId the address ID to delete
   */
  deleteAddress(addressId: number): Promise<void>;

  /** Update the default address for the customer (Customer must be present)
   * @param addressId the address ID to set as the default address
   */
  updateDefaultAddress(addressId: number): Promise<void>;
}
