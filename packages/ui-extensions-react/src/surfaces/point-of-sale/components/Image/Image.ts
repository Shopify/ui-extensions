import {Image as BaseImage} from '@shopify/ui-extensions/point-of-sale';
import {createRemoteReactComponent} from '@remote-ui/react';

export type {ImageProps} from '@shopify/ui-extensions/point-of-sale';

export const Image = createRemoteReactComponent(BaseImage);
