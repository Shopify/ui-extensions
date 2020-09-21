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

type AppLinkSchema =
  | ActionComponents
  | BasicComponents
  | FeedbackComponents
  | FormComponents
  | ListComponents
  | LoadingComponents
  | ImageComponents
  | OverlayComponents
  | StructureComponents;

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
  // @TODO: It would be better to use ExtensionPoint.SubscriptionManagementAdd, etc
  // as props, but that would create a circular dependency.
  // We should refactor this when we manage to separate extension types by package.
  AppLink: AppLinkSchema;
  Playground: PlaygroundSchema;
  SubscriptionManagementAdd: ModalSchema;
  SubscriptionManagementCreate: AppOverlaySchema;
  SubscriptionManagementEdit: AppOverlaySchema;
  SubscriptionManagementRemove: ModalSchema;
}
