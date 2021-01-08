import React, {useCallback, useMemo, useState} from 'react';
import {
  Frame,
  Navigation,
  Page,
  Layout,
  TopBar,
  Card,
  PageActions,
  Modal,
  TextContainer,
} from '@shopify/polaris';
import {useToastApi} from '@shopify/argo-admin-host';
import {ProductsMajor} from '@shopify/polaris-icons';
import {ExtensionPoint} from '@shopify/argo-admin';
import merge from 'lodash/fp/merge';

import {HostProps} from '../types';

import {ProductSubscriptionAction} from './types';
import {actionFields, defaultSettings} from './config';
import {usePageState, useSettings} from './useStorage';
import {SettingsForm} from './components/SettingsForm';

const {ArgoAppOverlay, ArgoModal, PlaygroundContext} = window.argoAdminHost;

const actionToExtensionPoint: {[key: string]: ExtensionPoint} = {
  [ProductSubscriptionAction.Add]: 'Admin::Product::SubscriptionPlan::Add',
  [ProductSubscriptionAction.Create]: 'Admin::Product::SubscriptionPlan::Create',
  [ProductSubscriptionAction.Edit]: 'Admin::Product::SubscriptionPlan::Edit',
  [ProductSubscriptionAction.Remove]: 'Admin::Product::SubscriptionPlan::Remove',
};

export function ProductSubscriptionHost(props: HostProps) {
  const [settings, updateSettings, setSettings] = useSettings();
  const [{extensionOpen}, setPageState] = usePageState();
  const [confirmResetOpen, setConfirmResetOpen] = useState(false);

  const selectedAction = settings.data?.action || ProductSubscriptionAction.Create;

  const extensionPoint = useMemo(() => actionToExtensionPoint[selectedAction], [selectedAction]);

  const isModal =
    extensionPoint === 'Admin::Product::SubscriptionPlan::Add' ||
    extensionPoint === 'Admin::Product::SubscriptionPlan::Remove';

  const outData = actionFields[selectedAction].reduce((_settings, key) => {
    // remove optional but undefined data values
    const value = settings.data?.[key];
    if (key !== 'action' && value !== undefined) {
      _settings[key] = settings.data?.[key];
    }
    return _settings;
  }, {} as any);

  const [Toast, toastApi] = useToastApi();
  const outSettings = merge(
    {...toastApi, ...settings, data: outData},
    {
      extensionPoint,
      locale: {
        initialValue: settings.locale,
        setOnChange() {
          console.log('Your onChange callback was set');
        },
      },
      sessionToken: {
        getSessionToken: () => Promise.resolve(settings.sessionToken),
      },
    },
  );

  const close = useCallback(() => setPageState((state) => state.extensionOpen, false), [
    setPageState,
  ]);

  const done = useCallback(() => {
    close();
    console.log('done() was called');
  }, [close]);

  const containerProps = useMemo(
    () => ({
      ...props,
      api: outSettings,
      extensionPoint,
      onClose: close,
      onDone: done,
      open: extensionOpen,
    }),
    [close, done, extensionOpen, extensionPoint, outSettings, props],
  );

  const extension = useMemo(
    () =>
      isModal ? (
        <ArgoModal {...containerProps} defaultTitle="Default title" liveReloadingEnabled />
      ) : (
        <ArgoAppOverlay {...containerProps} liveReloadingEnabled />
      ),
    [containerProps, isModal],
  );

  const closeConfirmReset = () => setConfirmResetOpen(false);
  const confirmResetModal = (
    <Modal
      open={confirmResetOpen}
      onClose={closeConfirmReset}
      title="Are you sure you want to reset?"
      primaryAction={{
        content: 'Reset',
        destructive: true,
        onAction: () => {
          setSettings(defaultSettings);
          closeConfirmReset();
        },
      }}
      secondaryActions={[
        {
          content: 'Cancel',
          onAction: closeConfirmReset,
        },
      ]}
    >
      <Modal.Section>
        <TextContainer>
          <p>Resetting your settings will permanently erase your changes</p>
        </TextContainer>
      </Modal.Section>
    </Modal>
  );

  const navigation = (
    <Navigation location="">
      <Navigation.Section
        fill
        items={[
          {
            url: '/',
            label: 'Product Subscription',
            icon: ProductsMajor,
            selected: true,
          },
        ]}
      />
    </Navigation>
  );

  return (
    <PlaygroundContext>
      <Frame navigation={navigation} topBar={<TopBar />}>
        <Page
          title="Product Subscription"
          primaryAction={{
            content: 'Show extension',
            onAction: () => setPageState((state) => state.extensionOpen, true),
          }}
        >
          {extension}
          {confirmResetModal}
          <Layout>
            <SettingsForm settings={settings} updateSettings={updateSettings} />
            <Layout.Section oneHalf>
              <Card sectioned>
                <pre>{JSON.stringify(outSettings, null, '  ')}</pre>
              </Card>
            </Layout.Section>
            <Layout.Section>
              <PageActions
                primaryAction={{
                  content: 'Show extension',
                  onAction: () => setPageState((state) => state.extensionOpen, true),
                }}
                secondaryActions={[
                  {
                    content: 'Reset',
                    destructive: true,
                    onAction: () => setConfirmResetOpen(true),
                  },
                ]}
              />
            </Layout.Section>
          </Layout>
          <Toast />
        </Page>
      </Frame>
    </PlaygroundContext>
  );
}
