import {useMemo} from 'react';
import {ProductDataInput, ProductData} from '@shopify/argo';

export function useProductData(productData: ProductData): ProductDataInput {
  return useMemo(() => ({productData}), [productData]);
}
