import {
  actionComponents,
  basicComponents,
  feedbackComponents,
  formComponents,
  listComponents,
  loadingComponents,
  imageComponents,
  overlayComponents,
  structureComponents,
} from '../component-sets';
import {ContainerActions} from '../components';

const appChromeSchema = {
  ...actionComponents,
  ...basicComponents,
  ...feedbackComponents,
  ...formComponents,
  ...listComponents,
  ...loadingComponents,
  ...imageComponents,
  ...overlayComponents,
  ...structureComponents,
};

const modalSchema = {
  ...actionComponents,
  ...basicComponents,
  ...feedbackComponents,
  ...formComponents,
  ...listComponents,
  ...loadingComponents,
  ...imageComponents,
  ContainerActions,
};

export const subscriptionManagementSchema = {
  // @TODO: It would be better to use ExtensionPoint.SubscriptionManagementAdd, etc
  // as props, but that would create a circular dependency.
  // We should refactor this when we manage to separate extension types by package.
  Add: modalSchema,
  Create: appChromeSchema,
  Edit: appChromeSchema,
  Remove: modalSchema,
};
