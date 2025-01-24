export interface ShippingLine {
  handle: string;
  price: string;
  title: string;
}

export interface CalculatedShippingLine extends ShippingLine {
  type: 'Calculated';
  methodType: 'SHIPPING' | 'RETAIL';
}

export interface CustomShippingLine extends ShippingLine {
  type: 'Custom';
}
