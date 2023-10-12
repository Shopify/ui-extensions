import {CountryCode} from './country-code';

export interface Cart {
  subtotal: string;
  taxTotal: string;
  grandTotal: string;
  note?: string;
  cartDiscount?: Discount;
  customer?: Customer;
  lineItems: LineItem[];
  properties: Record<string, string>;
}

export interface Customer {
  id: number;
  email?: string;
  firstName?: string;
  lastName?: string;
  note?: string;
}

export interface LineItem {
  uuid: string;
  price?: number;
  quantity: number;
  title?: string;
  variantId?: number;
  productId?: number;
  discounts: Discount[];
  taxable: boolean;
  sku?: string;
  vendor?: string;
  properties: {[key: string]: string};
}

export interface Discount {
  amount: number;
  discountDescription?: string;
  type?: string;
}

/**
 * Parameters for adding a line item discount.
 */
export interface LineItemDiscountInput {
  /**
   * The title of the line item discount.
   */
  title: string;
  /**
   * The discount type.
   */
  type: 'Percentage' | 'FixedAmount';
  /**
   * The percentage or fixed amount for the discount.
   */
  amount: string;
}

export interface CustomSale {
  quantity: number;
  title: string;
  price: string;
  taxable: boolean;
}

export interface Address {
  address1?: string;
  address2?: string;
  city?: string;
  company?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  province?: string;
  country?: string;
  zip?: string;
  name?: string;
  provinceCode?: string;
  countryCode?: CountryCode;
}
