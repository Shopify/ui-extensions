import {ExtensionPoint} from '@shopify/argo-admin';

export {playgroundSchema} from './playground';
export {subscriptionManagementSchema} from './subscription-management';

export const extensionComponentsLoader: Record<ExtensionPoint, () => Promise<any>> = {
  Playground: () =>
    import(/* webpackChunkName: 'argo-playground-components' */ './playground').then(
      (module) => module.playgroundSchema,
    ),

  'Admin::Product::SubscriptionPlan::Add': () =>
    import(
      /* webpackChunkName: 'argo-subscription-management-components' */ './subscription-management'
    ).then((module) => module.subscriptionManagementSchema.Add),
  'Admin::Product::SubscriptionPlan::Create': () =>
    import(
      /* webpackChunkName: 'argo-subscription-management-components' */ './subscription-management'
    ).then((module) => module.subscriptionManagementSchema.Create),
  'Admin::Product::SubscriptionPlan::Remove': () =>
    import(
      /* webpackChunkName: 'argo-subscription-management-components' */ './subscription-management'
    ).then((module) => module.subscriptionManagementSchema.Remove),
  'Admin::Product::SubscriptionPlan::Edit': () =>
    import(
      /* webpackChunkName: 'argo-subscription-management-components' */ './subscription-management'
    ).then((module) => module.subscriptionManagementSchema.Edit),
};
