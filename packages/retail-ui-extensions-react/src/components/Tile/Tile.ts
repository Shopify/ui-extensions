import {Tile as BaseTile} from '@shopify/retail-ui-extensions';
import {createRemoteReactComponent} from '@remote-ui/react';

export type {TileProps} from '@shopify/retail-ui-extensions';

export const Tile = createRemoteReactComponent(BaseTile);
