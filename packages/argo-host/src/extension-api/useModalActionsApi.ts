import {useMemo} from 'react';
import {ModalActionsApi} from '@shopify/argo/extension-api/modalActions';

type SetContent = (c: string) => void;
type SetAction = (f: () => void) => void;

interface ModalActionOptions {
  setPrimaryContent: SetContent;
  setPrimaryAction: SetAction;
  setSecondaryContent: SetContent;
  setSecondaryAction: SetAction;
  closeModal: () => void;
}

export function useModalActionsApi({
  setPrimaryContent,
  setPrimaryAction,
  setSecondaryContent,
  setSecondaryAction,
  closeModal,
}: ModalActionOptions): ModalActionsApi {
  return useMemo(() => {
    return {
      modalActions: {
        primaryAction: {
          setContent: setPrimaryContent,
          setAction: setPrimaryAction,
        },
        secondaryAction: {
          setContent: setSecondaryContent,
          setAction: setSecondaryAction,
        },
        closeModal: closeModal,
      },
    };
  }, [setPrimaryContent, setPrimaryAction, setSecondaryContent, setSecondaryAction, closeModal]);
}
