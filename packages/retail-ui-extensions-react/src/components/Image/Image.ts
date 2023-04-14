import {Image as BaseImage} from '@shopify/retail-ui-extensions';
import {createRemoteReactComponent} from '@remote-ui/react';

export type {ImageProps} from '@shopify/retail-ui-extensions';

export const Image = createRemoteReactComponent(BaseImage);
