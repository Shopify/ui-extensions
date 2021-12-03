import { createRemoteComponent } from '@remote-ui/core';

/**
 * The Tiles component is used to lay out elements as equally-sized elements,
 * optionally wrapping on multiple lines as well as a stack when space is limited.
 * If you have a direct child of `Tiles` that you don’t want to stretch, wrap that
 * child in a `View` component.
 */
export var Tiles = createRemoteComponent('Tiles');