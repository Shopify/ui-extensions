import React, {useCallback, useMemo, useState} from 'react';
import {ExtensionPoint, ContainerAction} from '@shopify/argo-admin';
import {Modal, ModalProps} from '@shopify/polaris';
import {retain} from '@remote-ui/web-workers';

import {ArgoHeader} from '../containers/shared/Header';
import {StandardContainer, StandardContainerProps} from '../containers/StandardContainer';

type BaseProps<T extends ExtensionPoint> = Omit<StandardContainerProps<T>, 'api'>;

type Api<T extends ExtensionPoint> = Omit<StandardContainerProps<T>['api'], 'modalActions'>;

export interface ModalContainerProps<T extends ExtensionPoint> extends BaseProps<T> {
  api?: Api<T>;
  defaultTitle: string;
  height?: string;
  onBackClick?: () => void;
  onClose: () => void;
  onDone: () => void;
  open: boolean;
}

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
      setPrimaryAction,
      setSecondaryAction,
    }),
    [primary, secondary, setPrimaryAction, setSecondaryAction],
  );
}

export function ModalContainer<T extends ExtensionPoint>({
  open,
  defaultTitle,
  onClose,
  onDone,
  onBackClick,
  height,
  api: externalApi,
  app,
  ...props
}: ModalContainerProps<T>) {
  const {primary, secondary, setPrimaryAction, setSecondaryAction} = useModalActionsApi();

  const onBackAction = useMemo(() => {
    return onBackClick ? () => onBackClick() : undefined;
  }, [onBackClick]);

  const close = useCallback(() => {
    onClose();
  }, [onClose]);

  const done = useCallback(() => {
    onDone();
  }, [onDone]);

  const containerApi = useMemo(
    () => ({
      container: {
        close,
        done,
        setPrimaryAction,
        setSecondaryAction,
      },
    }),
    [close, done, setPrimaryAction, setSecondaryAction],
  );

  const modalProps: ModalProps = {
    primaryAction: primary,
    onClose: close,
    open,
    title: (
      <ArgoHeader
        appName={app?.title || defaultTitle}
        appIcon={app?.icon?.transformedSrc}
        title={defaultTitle}
        onBackAction={onBackAction}
      />
    ),
  };

  if (secondary) {
    modalProps.secondaryActions = [secondary];
  }

  const api = useMemo(() => ({...containerApi, ...externalApi}), [externalApi, containerApi]);

  return (
    <>
      <Modal {...modalProps}>
        <div
          className="ArgoModal-content"
          style={{
            height,
          }}
        >
          <Modal.Section>
            {modalProps.open && <StandardContainer api={api as any} {...props} />}
          </Modal.Section>
        </div>
      </Modal>
    </>
  );
}
