export enum ExtensionPoint {
  AppLink = 'AppLink',
  Playground = 'Playground',

  MerchantMetafield = 'MerchantMetafield',

  SubscriptionManagementCreate = 'Admin::Product::SubscriptionManagement::Create',
  SubscriptionManagementAdd = 'Admin::Product::SubscriptionManagement::Add',
  SubscriptionManagementEdit = 'Admin::Product::SubscriptionManagement::Edit',
  SubscriptionManagementRemove = 'Admin::Product::SubscriptionManagement::Remove',
}
