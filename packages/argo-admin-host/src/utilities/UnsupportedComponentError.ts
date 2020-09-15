import {ExtensionPoint} from '@shopify/argo-admin';

export class UnsupportedComponentError extends Error {
  name = 'UnsupportedComponentError';

  constructor(extensionPoint: ExtensionPoint, component: string) {
    super(`The <${component}> component is not supported in the ${extensionPoint} extension point`);
  }
}
