import {Thumbnail as BaseThumbnail} from '@shopify/ui-extensions/customer-account';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type ThumbnailProps = ReactPropsFromRemoteComponentType<
  typeof BaseThumbnail
>;

export const Thumbnail = createRemoteReactComponent(BaseThumbnail);
