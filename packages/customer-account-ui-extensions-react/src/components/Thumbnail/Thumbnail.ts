import {Thumbnail as BaseThumbnail} from '@shopify/customer-account-ui-extensions';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type ThumbnailProps = ReactPropsFromRemoteComponentType<
  typeof BaseThumbnail
>;

export const Thumbnail = createRemoteReactComponent(BaseThumbnail);
