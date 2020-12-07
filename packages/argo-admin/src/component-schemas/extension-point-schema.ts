import {PlaygroundSchema, ModalSchema, AppOverlaySchema} from './schema-types';

export interface ExtensionPointSchema {
  Playground: PlaygroundSchema;
  'Admin::Product::SubscriptionPlan::Add': ModalSchema;
  'Admin::Product::SubscriptionPlan::Create': AppOverlaySchema;
  'Admin::Product::SubscriptionPlan::Edit': AppOverlaySchema;
  'Admin::Product::SubscriptionPlan::Remove': ModalSchema;
}
