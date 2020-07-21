import {createRemoteComponent} from '../utilities';

export interface ContainerAction {
  content: string;
  onAction(): void;
}

export interface ContainerActionsProps {
  primaryAction?: ContainerAction;
  secondaryAction?: ContainerAction;
}

export const ContainerActions = createRemoteComponent<'ContainerActions', ContainerActionsProps>(
  'ContainerActions',
);
