import {createRemoteComponent} from '@remote-ui/core';

export interface ProductImageProps {
  src?: string;
}

export const ProductImage = createRemoteComponent<
  'ProductImage',
  ProductImageProps
>('ProductImage');
