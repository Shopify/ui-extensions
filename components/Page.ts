export interface Action {
  text: string;
  destructive?: boolean;
  onPress: () => void;
}

export interface Page {
  title: string;
  subTitle?: string;
  primaryAction?: Action;
  secondaryActions?: Action[];
  children?: React.ReactNode;
}
