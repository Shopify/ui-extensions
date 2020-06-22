import {Tiles as BaseTiles, Tile as BaseTile} from '@shopify/argo-checkout';
import {createRemoteReactComponent} from '@remote-ui/react';

export const Tiles = createRemoteReactComponent(BaseTiles);
export const Tile = createRemoteReactComponent(BaseTile);
