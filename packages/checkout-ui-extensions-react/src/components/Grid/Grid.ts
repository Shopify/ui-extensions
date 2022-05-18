import {Grid as BaseGrid} from '@shopify/checkout-ui-extensions';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type GridProps = ReactPropsFromRemoteComponentType<typeof BaseGrid>;

export const Grid = createRemoteReactComponent(BaseGrid);
