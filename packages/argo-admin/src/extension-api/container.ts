import {ExtensionPoint, ExtensionApi} from '../extension-points';

export type ExtensionContainer<
  T extends ExtensionPoint
> = ExtensionApi[T]['container'];

export interface ContainerApi<T extends ExtensionPoint> {
  container: ExtensionContainer<T>;
}

export function isContainerApi(api: any): api is ContainerApi<any> {
  return 'container' in api;
}
