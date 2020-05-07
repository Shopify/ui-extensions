import React, {useCallback, useMemo, useState} from 'react';
import {ExtensionPoint} from '@shopify/argo';
import {useModalActionsInput} from '@shopify/argo-host';
import {Modal, ModalProps} from '@shopify/polaris';
import {retain} from '@shopify/web-worker';

import {ArgoHeader} from './shared/Header';
import {StandardContainer, StandardContainerProps} from './StandardContainer';

type BaseProps<T extends ExtensionPoint> = Omit<StandardContainerProps<T>, 'input'>;

type Input<T extends ExtensionPoint> = Omit<StandardContainerProps<T>['input'], 'modalActions'>;

export interface ModalContainerProps<T extends ExtensionPoint> extends BaseProps<T> {
  open: boolean;
  defaultTitle: string;
  onClose: () => void;
  onBackClick?: () => void;
  height?: string;
  input?: Input<T>;
}

type Action = () => void;
const noop = () => null;

export function ModalContainer<T extends ExtensionPoint>({
  open,
  defaultTitle,
  onClose,
  onBackClick,
  height,
  input: externalInput,
  app,
  ...props
}: ModalContainerProps<T>) {
  const [primaryContent, setPrimaryContent] = useState('Save');
  const [primaryAction, setPrimaryAction] = useState<Action>(() => noop);
  const [secondaryContent, setSecondaryContent] = useState('');
  const [secondaryAction, setSecondaryAction] = useState<Action>(() => noop);

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
      <ArgoHeader
        appName={app?.name || defaultTitle}
        appIcon={app?.icon}
        title={defaultTitle}
        onBackAction={onBackAction}
      />
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

  const input = useMemo(() => ({...modalActions, ...externalInput}), [externalInput, modalActions]);

  return (
    <>
      <Modal {...modalProps}>
        <div
          className="ArgoModal-content"
          style={{
            height,
          }}
        >
          <StandardContainer input={input as any} {...props} />
        </div>
      </Modal>
    </>
  );
}
