import type {ReactNode, FunctionComponent} from 'react';
import type {
  RemoteComponentType,
  PropsForRemoteComponent,
} from '@remote-ui/core';

export type ReactPropsFromRemoteComponentType<
  Type extends RemoteComponentType<any, any, any>,
> = PropsForRemoteComponent<Type> & {children?: ReactNode};

export type ReactComponentTypeFromRemoteComponentType<
  Type extends RemoteComponentType<any, any, any>,
> = FunctionComponent<ReactPropsFromRemoteComponentType<Type>>;
