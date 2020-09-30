import {
  actionComponents,
  basicComponents,
  feedbackComponents,
  formComponents,
  loadingComponents,
  imageComponents,
  overlayComponents,
} from '../component-sets';
import {Card, CardSection, ResourceList, ResourceItem} from '../components';

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
