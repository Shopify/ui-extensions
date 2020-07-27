import {ExtensionPoint} from '@shopify/argo-admin';

export {playgroundSchema} from './playground';
export {appLinkSchema} from './app-link';
export {subscriptionManagementSchema} from './subscription-management';

export const extensionComponentsLoader: Record<ExtensionPoint, () => Promise<any>> = {
  [ExtensionPoint.AppLink]: () =>
    import(/* webpackChunkName: 'argo-app-link-components' */ './app-link').then(
      (module) => module.appLinkSchema,
    ),
  [ExtensionPoint.Playground]: () =>
    import(/* webpackChunkName: 'argo-playground-components' */ './playground').then(
      (module) => module.playgroundSchema,
    ),

  [ExtensionPoint.SubscriptionManagementAdd]: () =>
    import(
      /* webpackChunkName: 'argo-subscription-management-components' */ './subscription-management'
    ).then((module) => module.subscriptionManagementSchema.Add),
  [ExtensionPoint.SubscriptionManagementCreate]: () =>
    import(
      /* webpackChunkName: 'argo-subscription-management-components' */ './subscription-management'
    ).then((module) => module.subscriptionManagementSchema.Create),
  [ExtensionPoint.SubscriptionManagementRemove]: () =>
    import(
      /* webpackChunkName: 'argo-subscription-management-components' */ './subscription-management'
    ).then((module) => module.subscriptionManagementSchema.Remove),
  [ExtensionPoint.SubscriptionManagementEdit]: () =>
    import(
      /* webpackChunkName: 'argo-subscription-management-components' */ './subscription-management'
    ).then((module) => module.subscriptionManagementSchema.Edit),

  [ExtensionPoint.MerchantMetafield]: () =>
    import(/* webpackChunkName: 'argo-merchant-metafield-components' */ './app-link').then(
      (module) => module.appLinkSchema,
    ),
};
