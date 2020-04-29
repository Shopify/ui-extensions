import {useMemo} from 'react';
import {ModalActionsInput} from '@shopify/argo';
type SetContent = (c: string) => void;
type SetAction = (f: () => void) => void;

interface ModalActionOptions {
  setPrimaryContent: SetContent;
  setPrimaryAction: SetAction;
  setSecondaryContent: SetContent;
  setSecondaryAction: SetAction;
  closeModal: () => void;
}

export default function useModalActionsInput({
  setPrimaryContent,
  setPrimaryAction,
  setSecondaryContent,
  setSecondaryAction,
  closeModal,
}: ModalActionOptions): ModalActionsInput {
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
