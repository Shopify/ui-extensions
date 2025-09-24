import {Product} from '../../../types/product';

export interface ProductApi {
  product: ProductApiContent;
}

export interface FullProductApi {
  product: Product;
}

export interface ProductApiContent {
  /**
   * The unique identifier for the product.
   */
  id: number;
  /**
   * The unique identifier for the product variant.
   */
  variantId: number;
}
