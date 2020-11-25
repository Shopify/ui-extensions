import React, {useMemo} from 'react';
import {Portal, ScrollLock, Scrollable, Page} from '@shopify/polaris';
import {ContainerApi, ExtensionPoint, ProductSubscriptionExtensionPoint} from '@shopify/argo-admin';

import {StandardContainer, StandardContainerProps} from '../../containers/StandardContainer';

import {Dialog, Header} from './components';
import styles from './AppOverlayContainer.module.css';

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

  return (
    <Portal idPrefix="argo-app-overlay">
      <Dialog open={open === true} onClose={() => {}}>
        {headerMarkup}
        <Scrollable className={styles.Body}>
          <Page>{open && content}</Page>
        </Scrollable>
      </Dialog>
      {open && <ScrollLock />}
    </Portal>
  );
}
