export interface ProductData {
  shopId: number;
  productId: number;
  variantId?: number;
  action?: string;
  additionalData?: {
    [key: string]: any;
  };
}

export interface ProductDataInput {
  productData: ProductData;
}

export function isProductDataInput(input: any): input is ProductDataInput {
  return 'productData' in input;
}
