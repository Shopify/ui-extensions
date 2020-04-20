import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@shopify/remote-ui-react';

import {Thumbnail as BaseThumbnail} from '../../core';

export type ThumbnailProps = ReactPropsFromRemoteComponentType<typeof BaseThumbnail>;
export const Thumbnail = createRemoteReactComponent(BaseThumbnail);
