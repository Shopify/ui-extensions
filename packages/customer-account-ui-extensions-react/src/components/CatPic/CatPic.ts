import {CatPic as BaseCatPic} from '@shopify/customer-account-ui-extensions';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type CatPicProps = ReactPropsFromRemoteComponentType<typeof BaseCatPic>;

export const CatPic = createRemoteReactComponent(BaseCatPic);
