import {createRemoteReactComponent, ReactPropsFromRemoteComponentType} from '@remote-ui/react';

import {Thumbnail as BaseThumbnail} from '@shopify/argo/components';

export type ThumbnailProps = ReactPropsFromRemoteComponentType<typeof BaseThumbnail>;
export const Thumbnail = createRemoteReactComponent(BaseThumbnail);
