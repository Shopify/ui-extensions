import {useMemo} from 'react';
import {ProductDataApi, ProductData} from '@shopify/argo';

export function useProductData(productData: ProductData): ProductDataApi {
  return useMemo(() => ({productData}), [productData]);
}
