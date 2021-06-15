import {
  ActionComponents,
  BasicComponents,
  FeedbackComponents,
  FormComponents,
  LoadingComponents,
  ImageComponents,
} from '../component-sets';

export type CardSchema =
  | ActionComponents
  | BasicComponents
  | FeedbackComponents
  | FormComponents
  | LoadingComponents
  | ImageComponents;
