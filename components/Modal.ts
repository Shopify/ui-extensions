export interface Action {
  text: string;
  destructive?: boolean;
  onPress: () => void;
}

export interface Modal {
  open: boolean;
  title?: string;
  message?: string;
  primaryAction?: Action;
  secondaryActions?: Action[];
  onClose: () => void;
  children?: React.ReactNode;
}
