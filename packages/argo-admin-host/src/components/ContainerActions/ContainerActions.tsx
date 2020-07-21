import {ContainerActionsProps} from '@shopify/argo-admin';
import {useContainerActions} from './ContainerActionsContext';

export default function ContainerActions({primaryAction, secondaryAction}: ContainerActionsProps) {
  useContainerActions({primaryAction, secondaryAction});
  return null;
}
