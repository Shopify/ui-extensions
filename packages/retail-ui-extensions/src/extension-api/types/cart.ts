import {CountryCode} from './CountryCode';

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
  discount?: Discount;
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
