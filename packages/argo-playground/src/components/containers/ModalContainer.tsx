import React, {useEffect, useMemo, useState, useCallback} from 'react';
import {
  ContainerAction,
  ContainerApi,
  ExtensionPoint,
  SubscriptionManagementExtensionPoint,
} from '@shopify/argo-admin';
import {Modal, ModalProps} from '@shopify/polaris';
import {retain} from '@remote-ui/web-workers';
import {ReadyState} from '@shopify/argo-admin-host';

import {ArgoHeader} from './shared/Header';
import {StandardContainer, StandardContainerProps} from './StandardContainer';

export function useModalActionsApi() {
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
      setPrimaryAction,
      setSecondaryAction,
    }),
    [primary, secondary, setPrimaryAction, setSecondaryAction],
  );
}

export interface ModalContainerProps<T extends ExtensionPoint> extends StandardContainerProps<T> {
  defaultTitle: string;
  height?: number;
  loading?: boolean;
  onClose: () => void;
  onDone?: () => void;
  onBackPress?: () => void;
  open?: boolean;
}

export function ModalContainer<T extends ExtensionPoint>(props: ModalContainerProps<T>) {
  const {
    app,
    api: externalApi,
    defaultTitle,
    height,
    loading = false,
    onClose,
    onDone = () => {},
    onBackPress,
    onReadyStateChange,
    open = false,
  } = props;

  const {primary, secondary, setPrimaryAction, setSecondaryAction} = useModalActionsApi();

  const containerApi: ContainerApi<SubscriptionManagementExtensionPoint> = useMemo(
    () => ({
      container: {
        close: onClose,
        done: onDone,
        setPrimaryAction,
        setSecondaryAction,
      },
    }),
    [onClose, onDone, setPrimaryAction, setSecondaryAction],
  );
  const api = useMemo(() => ({...containerApi, ...externalApi}), [
    externalApi,
    containerApi,
  ]) as any;

  const onBackAction = useCallback(() => {
    onBackPress?.();
  }, [onBackPress]);

  const [readyState, setReadyState] = useState(ReadyState.Loading);

  const content = useMemo(
    () => <StandardContainer {...props} api={api} onReadyStateChange={setReadyState} />,
    [props, api],
  );

  const title = useMemo(() => {
    if (!app) {
      return;
    }
    const {title: name, icon: {transformedSrc} = {}} = app;
    return (
      <ArgoHeader
        name={name}
        icon={transformedSrc}
        title={defaultTitle}
        onBackAction={onBackPress && onBackAction}
      />
    );
  }, [app, defaultTitle, onBackPress, onBackAction]);

  const extensionModalProps: ModalProps = useMemo(
    () => ({
      primaryAction: primary
        ? {
            ...primary,
            disabled: readyState !== ReadyState.Rendered,
          }
        : undefined,
      onClose,
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
      loading,
    }),
    [onClose, open, primary, secondary, readyState, title, loading],
  );

  useEffect(() => onReadyStateChange?.(readyState), [readyState, onReadyStateChange]);

  return (
    <Modal {...extensionModalProps}>
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
