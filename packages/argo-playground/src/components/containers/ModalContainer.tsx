import React, {useCallback, useMemo, useState} from 'react';
import {ExtensionPoint, ModalActionsInput, RenderExtensionComponentProps} from '@shopify/argo';
import {useModalActionsInput} from '@shopify/argo-host';
import {Modal, ModalProps} from '@shopify/polaris';
import {retain} from '@shopify/web-worker';

import {ArgoHeader} from './shared/Header';
import {StandardContainer} from './StandardContainer';

interface ArgoModalProps {
  open: boolean;
  defaultTitle: string;
  onClose: () => void;
  onBackClick?: () => void;
  appInfo: {
    icon?: string;
    name: string;
  };
  height?: string;
}

type Props<T extends ExtensionPoint> = RenderExtensionComponentProps<T> & ArgoModalProps;

type CompleteInput<T extends ExtensionPoint> = Props<T>['input'] & ModalActionsInput;

type Action = () => void;
const noop = () => null;

export function ModalContainer<T extends ExtensionPoint>({
  open,
  defaultTitle,
  appInfo,
  onClose,
  onBackClick,
  script,
  components,
  input,
  height,
}: Props<T>) {
  const [primaryContent, setPrimaryContent] = useState('Save');
  const [primaryAction, setPrimaryAction] = useState<Action>(() => noop);
  const [secondaryContent, setSecondaryContent] = useState('');
  const [secondaryAction, setSecondaryAction] = useState<Action>(() => noop);

  const {name, icon} = appInfo;
  const onBackAction = useMemo(() => {
    return onBackClick ? () => onBackClick() : undefined;
  }, [onBackClick]);

  const setPrimaryActionCallback = useCallback((callback: Action) => {
    setPrimaryAction(() => callback);
    retain(callback);
  }, []);
  const onPrimaryAction = useCallback(() => {
    primaryAction();
  }, [primaryAction]);

  const setSecondaryActionCallback = useCallback((callback: Action) => {
    setSecondaryAction(() => callback);
    retain(callback);
  }, []);
  const onSecondaryAction = useCallback(() => {
    secondaryAction();
  }, [secondaryAction]);

  const onCloseAction = useCallback(() => {
    onClose();
  }, [onClose]);

  const modalActions = useModalActionsInput({
    setPrimaryContent,
    setPrimaryAction: setPrimaryActionCallback,
    setSecondaryContent,
    setSecondaryAction: setSecondaryActionCallback,
    closeModal: onCloseAction,
  });

  const modalProps: ModalProps = {
    primaryAction: {
      content: primaryContent,
      onAction: onPrimaryAction,
    },
    onClose: onCloseAction,
    open,
    title: (
      <ArgoHeader appName={name} appIcon={icon} title={defaultTitle} onBackAction={onBackAction} />
    ),
  };

  if (secondaryContent) {
    modalProps.secondaryActions = [
      {
        content: secondaryContent,
        onAction: onSecondaryAction,
      },
    ];
  }

  const inputWithModalActions = useMemo(() => ({...modalActions, ...input} as CompleteInput<T>), [
    input,
    modalActions,
  ]);

  return (
    <>
      <Modal {...modalProps}>
        <div
          className="ArgoModal-content"
          style={{
            height,
          }}
        >
          <StandardContainer
            script={script}
            extensionPoint={ExtensionPoint.SubscriptionsManagement}
            components={components}
            input={inputWithModalActions as any}
          />
        </div>
      </Modal>
    </>
  );
}
