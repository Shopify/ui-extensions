import {useMemo} from 'react';
import {ProductDataApi, ProductDataPayload} from '@shopify/argo';

export function useProductData(productData: ProductDataPayload): ProductDataApi {
  return useMemo(() => ({productData}), [productData]);
}
