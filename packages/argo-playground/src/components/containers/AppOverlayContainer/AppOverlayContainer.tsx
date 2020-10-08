import React, {useMemo} from 'react';
import {Portal, Backdrop, Scrollable, Layout} from '@shopify/polaris';
import {TransitionGroup} from 'react-transition-group';
import {ContainerApi, ExtensionPoint, ProductSubscriptionExtensionPoint} from '@shopify/argo-admin';

import {StandardContainer, StandardContainerProps} from '../StandardContainer';

import {Dialog, Header} from './components';
import styles from './AppOverlayContainer.module.scss';

export interface AppOverlayContainerProps<T extends ExtensionPoint>
  extends StandardContainerProps<T> {
  onClose: () => void;
  onDone?: () => void;
  open?: boolean;
}

export function AppOverlayContainer<T extends ExtensionPoint>(props: AppOverlayContainerProps<T>) {
  const {app, api: externalApi, open, onClose, onDone = () => {}} = props;

  const containerApi: ContainerApi<ProductSubscriptionExtensionPoint> = useMemo(
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

    const {
      id,
      developerName,
      title,
      icon: {transformedSrc} = {},
      installation: {launchUrl = ''} = {},
    } = app;

    return (
      <Header
        appId={id}
        onClose={onClose}
        icon={transformedSrc}
        launchUrl={launchUrl}
        developerName={developerName}
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
          <Scrollable className={styles.Body}>
            <Layout sectioned>
              <Layout.Section>{content}</Layout.Section>
            </Layout>
          </Scrollable>
        </Dialog>
      </TransitionGroup>
      {backdrop}
    </Portal>
  );
}
