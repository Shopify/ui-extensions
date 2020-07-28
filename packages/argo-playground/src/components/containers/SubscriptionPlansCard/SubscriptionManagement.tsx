import React, {useCallback, useMemo, useState, useEffect} from 'react';
import {ExtensionPoint, ExtensionApi, ContainerAction} from '@shopify/argo-admin';
import {ReadyState} from '@shopify/argo-admin-host';
import {Modal, ModalProps, Stack, RadioButton} from '@shopify/polaris';
import {retain} from '@remote-ui/web-workers';

import {ArgoHeader} from '../shared/Header';
import {StandardContainer, StandardContainerProps} from '../StandardContainer';
import {SubscriptionManagementExtensionPoint, ContainerApi} from '@shopify/argo-admin';
import {createPlainWorkerFactory} from '@remote-ui/web-workers';

type BaseProps<T extends ExtensionPoint> = Omit<
  StandardContainerProps<T>,
  'api' | 'error' | 'loading'
>;

type Api = Pick<ExtensionApi[SubscriptionManagementExtensionPoint], 'data' | 'toast'>;

export interface SubscriptionManagmentProps<T extends ExtensionPoint> extends BaseProps<T> {
  open: boolean;
  defaultTitle: string;
  onDone: () => void;
  setApp: (app?: App) => void;
  onClose: () => void;
  onBackClick?: () => void;
  height?: string;
  api?: Api;
}

export interface App {
  title: string;
  icon?: string;
  id: string;
}

const modalClientScript = createPlainWorkerFactory(() =>
  import(/* webpackChunkName: '3p-modal-content' */ '../../../third-party/modal-content'),
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

function useModalActionsApi() {
  const [primary, setPrimary] = useState<ContainerAction | undefined>();
  const [secondary, setSecondary] = useState<ContainerAction | undefined>();

  const setPrimaryAction = useCallback((containerAction?: ContainerAction) => {
    if (containerAction) {
      const {content, onAction} = containerAction;
      if (content) {
        retain(onAction);
        setPrimary({content, onAction: () => onAction()});
        return;
      }
    }
    setPrimary(undefined);
  }, []);

  const setSecondaryAction = useCallback((containerAction?: ContainerAction) => {
    if (containerAction) {
      const {content, onAction} = containerAction;
      if (content) {
        retain(onAction);
        setSecondary({content, onAction: () => onAction()});
        return;
      }
    }
    setSecondary(undefined);
  }, []);

  return useMemo(
    () => ({
      primary: primary ? primary : undefined,
      secondary: secondary ? secondary : undefined,
      setPrimaryAction: setPrimaryAction,
      setSecondaryAction: setSecondaryAction,
    }),
    [primary, secondary, setPrimaryAction, setSecondaryAction],
  );
}

export function SubscriptionManagement<T extends ExtensionPoint>({
  open,
  defaultTitle,
  onBackClick,
  onClose,
  onDone,
  height,
  api: externalApi,
  onReadyStateChange,
  app,
  setApp,
  ...props
}: SubscriptionManagmentProps<T>) {
  const [appId, setAppId] = useState<string | undefined>();
  const [readyState, setReadyState] = useState(ReadyState.Loading);
  const {primary, secondary, setPrimaryAction, setSecondaryAction} = useModalActionsApi();

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

  const containerApi: ContainerApi<SubscriptionManagementExtensionPoint> = useMemo(
    () => ({
      container: {
        close,
        done,
        setPrimaryAction: isModal ? setPrimaryAction : undefined,
        setSecondaryAction: isModal ? setSecondaryAction : undefined,
      },
    }),
    [close, done, setPrimaryAction, setSecondaryAction, isModal],
  );

  const title = useMemo(
    () => (
      <ArgoHeader
        name={app?.title}
        icon={app?.icon}
        title={defaultTitle}
        onBackAction={onBackClick}
      />
    ),
    [app, defaultTitle, onBackClick],
  );

  const defaultPrimaryAction = useMemo(
    () =>
      isModal
        ? {
            content: 'Next',
            onAction: () => (appId ? setApp(apps[appId]) : null),
          }
        : undefined,
    [appId, setApp, isModal],
  );

  useEffect(() => {
    setPrimaryAction(defaultPrimaryAction);
    setSecondaryAction();
    // setPrimaryAction and setSecondaryAction are both static
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [app, defaultPrimaryAction]);

  const modalProps: ModalProps = useMemo(
    () => ({
      primaryAction: primary
        ? {
            ...primary,
            disabled: (!appId && !app) || (app && readyState !== ReadyState.Rendered),
          }
        : undefined,
      onClose: close,
      open,
      title,
      secondaryActions: secondary
        ? [
            {
              ...secondary,
              disabled: readyState !== ReadyState.Rendered,
            },
          ]
        : undefined,
    }),
    [app, appId, close, open, primary, readyState, secondary, title],
  );

  const api = useMemo(() => ({...containerApi, ...externalApi}), [externalApi, containerApi]);

  const handleSelectAppId = useCallback((_checked, id) => setAppId(id), []);

  useEffect(() => onReadyStateChange?.(readyState), [readyState, onReadyStateChange]);

  const appSelectionMarkup = (
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
  );

  const content = app ? (
    <StandardContainer
      {...props}
      app={app}
      script={modalClientScript.url}
      api={api as any}
      onReadyStateChange={setReadyState}
    />
  ) : (
    appSelectionMarkup
  );

  return (
    <Modal {...modalProps}>
      <div
        className="ArgoModal-content"
        style={{
          height,
        }}
      >
        {content}
      </div>
    </Modal>
  );
}
