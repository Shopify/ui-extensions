import type {Money} from './money';
import type {TaxLine} from './tax-line';

export interface ShippingLine {
  handle?: string;
  price: Money;
  title?: string;
  taxLines?: TaxLine[];
}

export interface CalculatedShippingLine extends ShippingLine {
  type: 'Calculated';
  methodType: 'SHIPPING' | 'RETAIL';
}

export interface CustomShippingLine extends ShippingLine {
  type: 'Custom';
}
