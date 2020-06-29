import React, {useMemo} from 'react';
import {Portal, Backdrop, Scrollable} from '@shopify/polaris';
import {TransitionGroup} from 'react-transition-group';
import {
  ContainerApi,
  ExtensionPoint,
  SubscriptionManagementExtensionPoint,
} from '@shopify/argo-admin';
import {Dialog, Header} from './components';
import {StandardContainer, StandardContainerProps} from '../StandardContainer';

import styles from './AppChromeContainer.scss';

export interface AppChromeContainerProps<T extends ExtensionPoint>
  extends StandardContainerProps<T> {
  onClose: () => void;
  onDone?: () => void;
  open?: boolean;
}

export function AppChromeContainer<T extends ExtensionPoint>(props: AppChromeContainerProps<T>) {
  const {app, api: externalApi, open, onClose, onDone = () => {}} = props;

  const containerApi: ContainerApi<SubscriptionManagementExtensionPoint> = useMemo(
    () => ({
      container: {
        close: onClose,
        done: onDone,
      },
    }),
    [onClose, onDone],
  );

  const api = useMemo(() => ({...containerApi, ...externalApi}), [externalApi, containerApi]);

  const headerMarkup = useMemo(() => {
    if (!app) {
      return;
    }

    const {id, title, icon: {transformedSrc} = {}, installation: {launchUrl = ''} = {}} = app;

    return (
      <Header
        appId={id}
        onClose={onClose}
        icon={transformedSrc}
        launchUrl={launchUrl}
        title={title}
      />
    );
  }, [app, onClose]);

  const content = useMemo(() => <StandardContainer {...props} api={api as any} />, [api, props]);

  const backdrop = open ? <Backdrop /> : null;

  return (
    <Portal idPrefix="argo-app-chrome">
      <TransitionGroup appear enter exit>
        <Dialog open={open === true} onClose={() => {}}>
          {headerMarkup}
          <Scrollable className={styles.Body}>{content}</Scrollable>
        </Dialog>
      </TransitionGroup>
      {backdrop}
    </Portal>
  );
}
