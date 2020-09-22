import {
  ActionComponents,
  BasicComponents,
  FeedbackComponents,
  FormComponents,
  ListComponents,
  LoadingComponents,
  ImageComponents,
  OverlayComponents,
  StructureComponents,
} from '../component-sets';

type PlaygroundSchema =
  | ActionComponents
  | BasicComponents
  | FeedbackComponents
  | FormComponents
  | ListComponents
  | LoadingComponents
  | ImageComponents
  | OverlayComponents
  | StructureComponents;

type AppOverlaySchema =
  | ActionComponents
  | BasicComponents
  | FeedbackComponents
  | FormComponents
  | ListComponents
  | LoadingComponents
  | ImageComponents
  | OverlayComponents
  | StructureComponents;

type ModalSchema =
  | ActionComponents
  | BasicComponents
  | FeedbackComponents
  | FormComponents
  | ListComponents
  | LoadingComponents
  | ImageComponents;

export interface ExtensionPointSchema {
  Playground: PlaygroundSchema;
  'Admin::Product::SubscriptionPlan::Add': ModalSchema;
  'Admin::Product::SubscriptionPlan::Create': AppOverlaySchema;
  'Admin::Product::SubscriptionPlan::Edit': AppOverlaySchema;
  'Admin::Product::SubscriptionPlan::Remove': ModalSchema;
}
