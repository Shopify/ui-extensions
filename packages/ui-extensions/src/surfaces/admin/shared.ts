import type {RemoteComponentType} from '@remote-ui/core';

type ComponentTypes = typeof import('./components');

export type Components = {
  [K in keyof ComponentTypes]: ComponentTypes[K] extends RemoteComponentType<
    any,
    any
  >
    ? ComponentTypes[K]
    : never;
};

export type AnyComponent = Components[keyof Components];
