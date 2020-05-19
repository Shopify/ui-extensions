import {ExtensionPoint} from '@shopify/argo';

export {playgroundSchema} from './playground';
export {appLinkSchema} from './app-link';
export {subscriptionManagementSchema} from './subscription-management';

export const extensionComponentsLoader: Record<ExtensionPoint, () => Promise<any>> = {
  [ExtensionPoint.AppLink]: () => import('./app-link').then(module => module.appLinkSchema),
  [ExtensionPoint.Playground]: () => import('./playground').then(module => module.playgroundSchema),
  [ExtensionPoint.SubscriptionManagement]: () =>
    import('./subscription-management').then(module => module.subscriptionManagementSchema),
  [ExtensionPoint.MerchantMetafield]: () =>
    import('./app-link').then(module => module.appLinkSchema),
};
