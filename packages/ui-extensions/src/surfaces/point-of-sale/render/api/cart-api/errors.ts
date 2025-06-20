import {CartApiContent} from './cart-api';

type CartApiMethods = Omit<CartApiContent, 'subscribable'>;

/**
 * An error thrown when an attempt to edit the cart is made while it is not editable.
 */
export class CartNotEditableError extends Error {
  constructor(
    /** The name of the method that attempted to modify the cart */
    public methodName: keyof CartApiMethods,
  ) {
    super(
      `attempted to modify cart when not editable (calling "${methodName}")`,
    );
  }
}
