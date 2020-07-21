import {createContext, useContext, useEffect} from 'react';
import {ContainerAction, ContainerActionsProps} from '@shopify/argo-admin';

interface ContainerActionsSetterProps {
  setPrimaryAction: (action?: ContainerAction) => void;
  setSecondaryAction: (action?: ContainerAction) => void;
}

const ContainerActionsContext = createContext<ContainerActionsSetterProps>({
  setPrimaryAction: () => {},
  setSecondaryAction: () => {},
});

export const ContainerActionsProvider = ContainerActionsContext.Provider;

export const useContainerActions = ({primaryAction, secondaryAction}: ContainerActionsProps) => {
  const {setPrimaryAction, setSecondaryAction} = useContext(ContainerActionsContext);

  useEffect(() => {
    setPrimaryAction(primaryAction);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [primaryAction]);

  useEffect(() => {
    setSecondaryAction(secondaryAction);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secondaryAction]);
};
