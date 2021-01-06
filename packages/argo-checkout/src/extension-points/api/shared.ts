export type ValueOrPromise<T> = T extends PromiseLike<any> ? T : T | Promise<T>;

export interface Purchase {
  /** Initial purchase's unique identifier */
  referenceId: string;
  customerId?: string;
  destinationCountryCode?: string;
  totalPriceSet: MoneyBag;
  /** Items being purchased */
  lineItems: LineItem[];
}

export interface Shop {
  id: number;
  domain: string;
  /**
   * Only public listed metafields are available
   * https://shopify.dev/tutorials/retrieve-metafields-with-storefront-api#expose-metafields-to-the-storefront-api
   */
  metafields: Metafield[];
}

export interface LineItem {
  /** Product being purchased */
  product: Product;
  quantity: number;
  totalPriceSet: MoneyBag;
}

export interface Product {
  id: number;
  title: string;
  /** Variant being purchased */
  variant: Variant;

  /**
   * only public listed metafields are available
   * https://shopify.dev/tutorials/retrieve-metafields-with-storefront-api#expose-metafields-to-the-storefront-api
   */
  metafields: Metafield[];
}

export interface Variant {
  id: number;
  title: string;
  /**
   * Only public listed metafields are available
   * https://shopify.dev/tutorials/retrieve-metafields-with-storefront-api#expose-metafields-to-the-storefront-api
   */
  metafields: Metafield[];
}

export interface Metafield {
  key: string;
  namespace: string;
  value: string | number;
  valueType: 'integer' | 'string' | 'json_string';
}

export interface Money {
  amount: string;
  /** In ISO 4217 format */
  currencyCode: string;
}

/** Represents an amount in both shop and presentment currencies. */
export interface MoneyBag {
  shopMoney: Money;
  presentmentMoney: Money;
}
