import type {StandardApi} from './standard';

export interface PostPurchaseCrossSellApi extends StandardApi {
  orderId: number;
  shopId: number;
  token: string;
  acceptUpsell(payload: UpsellPayload): Promise<void>;
  calculateOffer(
    calculateOfferInput: CalculatedRequest,
  ): Promise<CalculatedResponse>;
  done(): Promise<void>;
}

/* eslint-disable @typescript-eslint/camelcase */

export interface Variant {
  id: number;
  title: string;
  price: string;
  compare_at_price: null;
  image_id?: number;
}

export interface Discount {
  discount_type?: 'percentage' | 'amount';
  discount_value?: string;
}

export interface Offer extends Discount {
  id: number;
  offer_group_id: number;
  variant_ids: number[];
}

export interface Variant {
  id: number;
  title: string;
  price: string;
}

export interface Product {
  id: number;
  title: string;
  variants: Variant[];
  image?: Image;
  images: Image[];
}

export interface Image {
  id: number;
  src: string;
  height: number;
  width: number;
  alt: string;
}

export interface InitialResponse {
  offer: Offer;
  products: Product[];
}

export interface CalculatedRequest {
  variants_to_add: {
    id: string;
    quantity: number;
    discount?: {percent?: number; amount?: number};
  }[];
  lines_to_decrement: {id: string; quantity: number}[];
}

export interface CalculatedResponse {
  id: string;
  currency: string;
  line_items: {
    added: CalculatedOfferResponseLineItem[];
    removed: CalculatedOfferResponseLineItem[];
  };
  totals: {
    original: Total;
    updated: Total;
  };
  tax_lines: {
    added: TaxLine[];
    removed: TaxLine[];
  };
  shipping_lines: {
    added: any[];
  };
}

export interface ShopMoney {
  shopMoney: {
    currencyCode: string;
    amount: string;
  };
}

export interface TaxLine {
  rate: number;
  rate_percentage: number;
  title: string;
  price: number;
}

export interface CalculatedOfferResponseLineItem {
  variant_id: string;
  quantity: number;
  price: number;
  discounts: Discount[];
  discounted_price: number;
  tax_lines: TaxLine[];
  subtotal_price: number;
  total_tax: number;
  total_price: number;
}

export interface Total {
  subtotal_price: number;
  total_price: number;
  total_tax: number;
  total_shipping: number;
}

export interface UpsellPayloadVariantToAdd {
  id: string;
  quantity: number;
  discount: Discount;
}

export interface UpsellPayload {
  lines_to_decrement: [];
  shipping_cost: string;
  variants_to_add: UpsellPayloadVariantToAdd[];
}

export interface OfferData {
  id: number;
  handledOffersCount: number;
  combinedTitle?: string;
  productTitle?: string;
  variantTitle?: string;
  imageSrc?: string;
  currency?: string;
  originalPrice?: string;
  discountedPrice?: string;
  taxAmount?: string;
  total?: string;
  expiresAfterSeconds?: number;
  youSave?: string;
}

export interface OfferContext {
  offerData: OfferData;
  handleAccept(): void;
  handleDecline(): void;
}

/* eslint-enable @typescript-eslint/camelcase */
