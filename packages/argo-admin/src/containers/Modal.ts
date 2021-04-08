import {
  ActionComponents,
  BasicComponents,
  FeedbackComponents,
  FormComponents,
  ListComponents,
  LoadingComponents,
  ImageComponents,
} from '../component-sets';

export type ModalSchema =
  | ActionComponents
  | BasicComponents
  | FeedbackComponents
  | FormComponents
  | ListComponents
  | LoadingComponents
  | ImageComponents;
