import type {Context} from './Context';
import type {Cart, Customer, ProductVariant} from './Shared';

// This is passed to the register function init object
export interface RegisterInit {
  context: Context;
  data: {
    customer: Partial<Customer> | null;
    cart: Partial<Cart> | null;
  };
}

// This is received by the web-pixels-manager from the backend
export interface InitData {
  customer?: Customer;
  cart?: Cart;
  productVariants?: ProductVariant[];
}
