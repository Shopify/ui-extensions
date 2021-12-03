import type { ReactNode, FunctionComponent } from 'react';
import type { RemoteComponentType, PropsForRemoteComponent } from '@remote-ui/core';
export declare type ReactPropsFromRemoteComponentType<Type extends RemoteComponentType<any, any, any>> = PropsForRemoteComponent<Type> & {
    children?: ReactNode;
};
export declare type ReactComponentTypeFromRemoteComponentType<Type extends RemoteComponentType<any, any, any>> = FunctionComponent<ReactPropsFromRemoteComponentType<Type>>;
//# sourceMappingURL=utilities.d.ts.map