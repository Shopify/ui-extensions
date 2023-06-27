import {AppAction as BaseAppAction} from '@shopify/ui-extensions/admin';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export const AppAction = createRemoteReactComponent(BaseAppAction, {
  fragmentProps: ['primaryAction', 'secondaryAction'],
});

export type AppActionProps = ReactPropsFromRemoteComponentType<
  typeof BaseAppAction
>;
