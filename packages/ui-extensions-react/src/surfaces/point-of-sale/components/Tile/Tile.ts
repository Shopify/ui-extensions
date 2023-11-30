import {Tile as BaseTile} from '@shopify/ui-extensions/point-of-sale';
import {createRemoteReactComponent} from '@remote-ui/react';

export type {TileProps} from '@shopify/ui-extensions/point-of-sale';

export const Tile = createRemoteReactComponent(BaseTile);
