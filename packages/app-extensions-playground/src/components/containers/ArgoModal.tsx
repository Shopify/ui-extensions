import React, {useCallback} from 'react';
import {Modal} from '@shopify/polaris';
import {ArgoHeader} from './shared/Header';
import {
  ExtensionPoint,
  ExtractedInputFromRenderExtension,
  CallbackTypeForExtensionPoint,
} from '@shopify/app-extensions-renderer';
import {AppExtension} from '../AppExtension';

interface Props<T extends ExtensionPoint> {
  open: boolean;
  defaultTitle: string;
  onClose: () => void;
  onBackClick?: () => void;
  appInfo: {
    icon?: string;
    name: string;
  };
  extensionPoint: T;
  script?: URL | string;
  height?: string;
  components?: {[key: string]: any};
  input?: ExtractedInputFromRenderExtension<CallbackTypeForExtensionPoint<T>>;
}

export function ArgoModal<T extends ExtensionPoint>({
  open,
  defaultTitle,
  appInfo,
  onClose,
  onBackClick,
  extensionPoint,
  script,
  components,
  input,
  height,
}: Props<T>) {
  const {name, icon} = appInfo;
  const onBackAction = useCallback(() => {
    console.log('is Back click', onBackClick);
    onBackClick?.();
  }, [open, onBackClick]);
  const onPrimaryAction = useCallback(() => {
    console.log('Primary Click');
  }, []);
  const onSecondaryAction = useCallback(() => {
    console.log('Secondary Click');
  }, []);
  const onCloseAction = useCallback(() => {
    console.log('Close Click');
    onClose();
  }, [open]);

  const modalProps = {
    primaryAction: {
      content: 'Ok',
      onAction: onPrimaryAction,
    },
    secondaryActions: [
      {
        content: 'Cancel',
        onAction: onSecondaryAction,
      },
    ],
    onClose: onCloseAction,
  };

  return (
    <Modal open={open} {...modalProps}>
      <Modal.Section>
        <ArgoHeader
          appName={name}
          appIcon={icon}
          title={defaultTitle}
          onBackAction={onBackAction}
        />
      </Modal.Section>
      <div
        style={{
          height,
        }}
      >
        <AppExtension
          script={script}
          extensionPoint={extensionPoint}
          components={components}
          input={input}
        />
      </div>
    </Modal>
  );
}

// .Polaris-Modal-CloseButton--withoutTitle
// z-index: 2;
// top: 3.2rem;
// right: 2rem;
