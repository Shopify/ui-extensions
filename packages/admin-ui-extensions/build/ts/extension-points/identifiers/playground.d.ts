import { RemoteRoot } from '@remote-ui/core';
import { AllComponentsSchema } from '../../containers';
import { RenderableExtensionCallback, StandardApi, ToastApi } from '../types';
export declare type PlaygroundExtensionPoint = 'Playground';
export interface PlaygroundExtensionApi {
    Playground: StandardApi<PlaygroundExtensionPoint> & ToastApi;
}
export interface PlaygroundExtensionPointCallback {
    Playground: RenderableExtensionCallback<PlaygroundExtensionApi['Playground'], RemoteRoot<AllComponentsSchema>>;
}
//# sourceMappingURL=playground.d.ts.map