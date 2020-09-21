import {
  actionComponents,
  basicComponents,
  feedbackComponents,
  formComponents,
  listComponents,
  loadingComponents,
  imageComponents,
  overlayComponents,
} from '../component-sets';
import {Card, CardSection} from '../components';

const appOverlaySchema = {
  ...actionComponents,
  ...basicComponents,
  ...feedbackComponents,
  ...formComponents,
  ...listComponents,
  ...loadingComponents,
  ...imageComponents,
  ...overlayComponents,
  Card,
  CardSection,
};

const modalSchema = {
  ...actionComponents,
  ...basicComponents,
  ...feedbackComponents,
  ...formComponents,
  ...listComponents,
  ...loadingComponents,
  ...imageComponents,
};

export const subscriptionManagementSchema = {
  // @TODO: It would be better to use ExtensionPoint.SubscriptionManagementAdd, etc
  // as props, but that would create a circular dependency.
  // We should refactor this when we manage to separate extension types by package.
  Add: modalSchema,
  Create: appOverlaySchema,
  Edit: appOverlaySchema,
  Remove: modalSchema,
};
