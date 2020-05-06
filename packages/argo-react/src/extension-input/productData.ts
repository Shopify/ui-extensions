import {isProductDataInput} from '@shopify/argo';

import {useExtensionInput} from './utils';

export function useProductData() {
  const input = useExtensionInput();
  if (!isProductDataInput(input)) {
    throw new Error('No productData input found');
  }
  return input.productData;
}
