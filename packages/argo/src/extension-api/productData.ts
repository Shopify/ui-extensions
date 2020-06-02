export interface ProductData {
  shopId: number;
  productId: number;
  variantId?: number;
  action?: string;
  additionalData?: {
    [key: string]: any;
  };
}

export interface ProductDataApi {
  productData: ProductData;
}

export function isProductDataApi(api: any): api is ProductDataApi {
  return 'productData' in api;
}
