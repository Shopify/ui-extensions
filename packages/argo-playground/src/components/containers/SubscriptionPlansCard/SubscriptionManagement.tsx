import React, {useCallback, useMemo, useState, useEffect} from 'react';
import {
  ExtensionPoint,
  ExtensionApi,
  SubscriptionManagementExtensionPoint,
} from '@shopify/argo-admin';
import {ReadyState} from '@shopify/argo-admin-host';
import {Modal, ModalProps, Stack, RadioButton} from '@shopify/polaris';
import {createPlainWorkerFactory} from '@remote-ui/web-workers';

import {ModalContainer, ModalContainerProps} from '../ModalContainer';
import {App} from '../StandardContainer';
import {AppChromeContainer, AppChromeContainerProps} from '../AppChromeContainer';

type ContainerProps<T extends ExtensionPoint> = AppChromeContainerProps<T> & ModalContainerProps<T>;

type BaseProps<T extends ExtensionPoint> = Omit<ContainerProps<T>, 'api' | 'error' | 'loading'>;

type Api = Pick<ExtensionApi[SubscriptionManagementExtensionPoint], 'data' | 'toast'>;

export interface SubscriptionManagementProps<T extends ExtensionPoint> extends BaseProps<T> {
  open: boolean;
  onDone: () => void;
  setApp: (app?: App) => void;
  api?: Api;
}

const subscriptionClientScript = createPlainWorkerFactory(() =>
  import(
    /* webpackChunkName: '3p-subscription-content' */ '../../../third-party/subscription-content'
  ),
);

export const apps = {
  'one-more-time': {
    id: 'one-more-time',
    title: 'OneMoreTime',
  },
  'another-app': {
    id: 'another-app',
    title: 'AnotherApp',
  },
};

export function SubscriptionManagement<T extends ExtensionPoint>({
  open,
  defaultTitle,
  onClose,
  onDone,
  height,
  api,
  onReadyStateChange,
  app,
  setApp,
  ...props
}: SubscriptionManagementProps<T>) {
  const [appId, setAppId] = useState<string | undefined>();
  const [readyState, setReadyState] = useState(ReadyState.Loading);

  const close = useCallback(() => {
    setApp(undefined);
    setAppId(undefined);
    onClose();
  }, [onClose, setApp]);

  const done = useCallback(() => {
    setApp(undefined);
    setAppId(undefined);
    onDone();
  }, [onDone, setApp]);
  const {extensionPoint} = props;
  const isModal =
    extensionPoint === ExtensionPoint.SubscriptionManagementAdd ||
    extensionPoint === ExtensionPoint.SubscriptionManagementRemove;

  const onBackPress = useCallback(
    // Reset the app selection
    () => setApp(undefined),
    [setApp],
  );

  const appSelectModalProps: ModalProps = useMemo(
    () => ({
      primaryAction: {
        content: 'Next',
        disabled: (!appId && !app) || (app && readyState !== ReadyState.Rendered),
        onAction: () => (appId ? setApp(apps[appId]) : null),
      },
      onClose,
      open,
      title: `${defaultTitle} - Select an app`,
      secondaryActions: [
        {
          content: 'Cancel',
          disabled: readyState !== ReadyState.Rendered,
          onAction: onClose,
        },
      ],
    }),
    [app, appId, defaultTitle, onClose, open, readyState, setApp],
  );

  const handleSelectAppId = useCallback((_checked, id) => setAppId(id), []);

  useEffect(() => onReadyStateChange?.(readyState), [readyState, onReadyStateChange]);

  const appSelectionMarkup = (
    <Modal {...appSelectModalProps}>
      <div
        className="ArgoModal-content"
        style={{
          height,
        }}
      >
        <Modal.Section>
          <Stack vertical>
            {Object.values(apps).map(({id, title}) => {
              return (
                <RadioButton
                  key={id}
                  label={title}
                  checked={appId === id}
                  id={id}
                  onChange={handleSelectAppId}
                />
              );
            })}
          </Stack>
        </Modal.Section>
      </div>
    </Modal>
  );

  const containerProps = useMemo(
    () => ({
      ...props,
      app,
      api: api as any,
      onReadyStateChange: setReadyState,
      script: subscriptionClientScript.url,
      onClose: close,
      onDone: done,
      open,
    }),
    [api, app, close, done, open, props, setReadyState],
  );

  const containerMarkup = useMemo(
    () =>
      isModal ? (
        <ModalContainer
          {...containerProps}
          defaultTitle={defaultTitle}
          onBackPress={onBackPress}
          height={height}
        />
      ) : (
        <AppChromeContainer {...containerProps} />
      ),
    [containerProps, defaultTitle, height, isModal, onBackPress],
  );

  const containerOrAppSelectionMarkup = app ? containerMarkup : appSelectionMarkup;
  return <>{containerOrAppSelectionMarkup}</>;
}
