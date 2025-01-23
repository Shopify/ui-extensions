export type ShippingLine = CalculatedShippingLine | CustomShippingLine;

export interface CalculatedShippingLine {
  price: string;
  title: string;
  methodType: 'SHIPPING' | 'RETAIL';
  type: 'Calculated';
}

export interface CustomShippingLine {
  price: string;
  title: string;
  type: 'Custom';
}
