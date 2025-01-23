export interface TaxLine {
  uuid: string;
  price: string;
  rate: number;
  rateRange?: {min: number; max: number};
  title: string;
  enabled: boolean;
}
