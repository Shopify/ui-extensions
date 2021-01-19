import {
  actionComponents,
  basicComponents,
  feedbackComponents,
  formComponents,
  loadingComponents,
  imageComponents,
  overlayComponents,
} from '../sets';
import {Card, CardSection, ResourceList, ResourceItem} from '..';

const appOverlaySchema = {
  ...actionComponents,
  ...basicComponents,
  ...feedbackComponents,
  ...formComponents,
  ...loadingComponents,
  ...imageComponents,
  ...overlayComponents,
  ResourceList,
  ResourceItem,
  Card,
  CardSection,
};

const modalSchema = {
  ...actionComponents,
  ...basicComponents,
  ...feedbackComponents,
  ...formComponents,
  ...loadingComponents,
  ...imageComponents,
  ResourceList,
  ResourceItem,
};

export const ProductSubscriptionSchema = {
  Add: modalSchema,
  Create: appOverlaySchema,
  Edit: appOverlaySchema,
  Remove: modalSchema,
};
