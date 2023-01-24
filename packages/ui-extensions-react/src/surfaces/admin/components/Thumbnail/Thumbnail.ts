import {Thumbnail as BaseThumbnail} from '@shopify/ui-extensions/admin';
import {createRemoteReactComponent} from '@remote-ui/react';

export const Thumbnail = createRemoteReactComponent(BaseThumbnail);
export type {ThumbnailProps} from '@shopify/ui-extensions/admin';
