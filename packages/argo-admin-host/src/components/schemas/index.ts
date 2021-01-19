import {ExtensionPoint} from '@shopify/argo-admin';

export {playgroundSchema} from './playground';
export {ProductSubscriptionSchema} from './product-subscription';

export const extensionComponentsLoader: Record<ExtensionPoint, () => Promise<any>> = {
  Playground: () =>
    import(/* webpackChunkName: 'argo-playground-components' */ './playground').then(
      (module) => module.playgroundSchema,
    ),

  'Admin::Product::SubscriptionPlan::Add': () =>
    import(
      /* webpackChunkName: 'argo-product-subscription-components' */ './product-subscription'
    ).then((module) => module.ProductSubscriptionSchema.Add),
  'Admin::Product::SubscriptionPlan::Create': () =>
    import(
      /* webpackChunkName: 'argo-product-subscription-components' */ './product-subscription'
    ).then((module) => module.ProductSubscriptionSchema.Create),
  'Admin::Product::SubscriptionPlan::Remove': () =>
    import(
      /* webpackChunkName: 'argo-product-subscription-components' */ './product-subscription'
    ).then((module) => module.ProductSubscriptionSchema.Remove),
  'Admin::Product::SubscriptionPlan::Edit': () =>
    import(
      /* webpackChunkName: 'argo-product-subscription-components' */ './product-subscription'
    ).then((module) => module.ProductSubscriptionSchema.Edit),
};
