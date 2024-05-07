import type {
  Context,
  Cart,
  Checkout,
  Customer,
  ProductVariant,
} from './PixelEvents';

// This is passed to the register function init object
export interface RegisterInit {
  context: Context;
  data: {
    customer: Partial<Customer> | null;
    cart: Partial<Cart> | null;
  };
  customerPrivacy: {
    analyticsProcessingAllowed: boolean;
    marketingAllowed: boolean;
    preferencesProcessingAllowed: boolean;
    saleOfDataAllowed: boolean;
  };
}

// This is received by the web-pixels-manager from the backend
export interface InitData {
  customer?: Customer;
  cart?: Cart;
  checkout?: Checkout;
  productVariants?: ProductVariant[];
}
