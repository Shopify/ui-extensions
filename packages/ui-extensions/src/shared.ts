import type {RemoteComponentType} from '@remote-ui/core';

/**
 * The utility type that filters a component set to only include valid `RemoteComponentType` components. Use this to build type-safe component sets for extensions.
 */
export type ComponentsBuilder<ComponentTypes> = {
  [K in keyof ComponentTypes]: ComponentTypes[K] extends RemoteComponentType<
    any,
    any
  >
    ? ComponentTypes[K]
    : never;
};

/**
 * The utility type that extracts a union of all component types from a `ComponentsBuilder`. Use this to reference any component from a component set.
 */
export type AnyComponentBuilder<ComponentTypes> =
  ComponentsBuilder<ComponentTypes>[keyof ComponentsBuilder<ComponentTypes>];

/**
 * The supported GraphQL Admin API versions. Use this to specify which API version your GraphQL queries should execute against. Each version includes specific features, bug fixes, and breaking changes. The `unstable` version provides access to the latest features, and can change without notice because it's not subject to versioning guarantees.
 */
export type ApiVersion =
  | '2023-04'
  | '2023-07'
  | '2023-10'
  | '2024-01'
  | 'unstable';
