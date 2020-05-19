export interface Action {
  content: string;
  destructive?: boolean;
  onAction?: () => void;
}

export type ValueOf<T> = T[keyof T];
