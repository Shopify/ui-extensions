import type {ReactNode, FunctionComponent} from 'react';
import type {
  RemoteComponentType,
  PropsForRemoteComponent,
} from '@remote-ui/core';

export type ReactPropsFromRemoteComponentType<
  Type extends RemoteComponentType<string, any, any>
> = PropsForRemoteComponent<Type> & {children?: ReactNode};

export type ReactComponentTypeFromRemoteComponentType<
  Type extends RemoteComponentType<string, any, any>
> = FunctionComponent<ReactPropsFromRemoteComponentType<Type>>;

/**
 * We want all the components we export to be usable and strongly
 * typed, regardless of whether they are used by the JavaScript API
 * (`root.createComponent()`) or are used as JSX constructor functions.
 * This function takes in the "real" value (the string name of the
 * component), and returns an object it fakes to have the right type
 * to satisfy both of the use cases above.
 */
export function createRemoteComponent<
  Type extends string,
  Props = {},
  AllowedChildren extends RemoteComponentType<string, any> | boolean = true
>(
  componentType: Type,
): RemoteComponentType<Type, Props, AllowedChildren> &
  ReactComponentTypeFromRemoteComponentType<
    RemoteComponentType<Type, Props, AllowedChildren>
  > {
  return componentType as any;
}
