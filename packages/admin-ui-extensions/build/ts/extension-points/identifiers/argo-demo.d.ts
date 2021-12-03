import { RemoteRoot } from '@remote-ui/core';
import { AllComponentsSchema } from '../../containers';
import { ContainerAction, RenderableExtensionCallback, StandardApi, ToastApi, RouterApi } from '../types';
export declare type ArgoDemoExtensionPoint = 'Admin::App' | 'Admin::Product::MoreActions';
export interface ArgoDemoContainerApi {
    setBreadcrumbActions: (actions?: ContainerAction[]) => void;
}
export interface ArgoDemoExtensionApi {
    'Admin::App': StandardApi<ArgoDemoExtensionPoint> & ToastApi & ArgoDemoContainerApi & RouterApi;
    'Admin::Product::MoreActions': StandardApi<ArgoDemoExtensionPoint> & ToastApi;
}
export interface ArgoDemoExtensionPointCallback {
    'Admin::App': RenderableExtensionCallback<ArgoDemoExtensionApi['Admin::App'], RemoteRoot<AllComponentsSchema>>;
    'Admin::Product::MoreActions': RenderableExtensionCallback<ArgoDemoExtensionApi['Admin::Product::MoreActions'], RemoteRoot<AllComponentsSchema>>;
}
//# sourceMappingURL=argo-demo.d.ts.map