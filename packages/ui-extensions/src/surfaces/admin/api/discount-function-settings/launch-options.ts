interface Metafield {
  description?: string;
  id: string;
  namespace: string;
  key: string;
  value: string;
  type: string;
}
export enum DiscountClass {
  Product = 'PRODUCT',
  Order = 'ORDER',
  Shipping = 'SHIPPING',
}

/**
 * The object that exposes the validation with its settings.
 */
export interface DiscountFunctionSettingsData {
  id: string;
  metafields: Metafield[];
  discountClasses: DiscountClass[];
}
