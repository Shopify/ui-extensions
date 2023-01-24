import type {RemoteComponentType} from '@remote-ui/core';

export type ComponentsBuilder<ComponentTypes> = {
  [K in keyof ComponentTypes]: ComponentTypes[K] extends RemoteComponentType<
    any,
    any
  >
    ? ComponentTypes[K]
    : never;
};

export type AnyComponentBuilder<ComponentTypes> =
  ComponentsBuilder<ComponentTypes>[keyof ComponentsBuilder<ComponentTypes>];
