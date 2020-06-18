export interface Action {
  content: string;
  onAction?(): void;
}
export interface DisableableAction extends Action {
  disabled?: boolean;
}
export interface DestructableAction extends Action {
  destructive?: boolean;
}

export type ValueOf<T> = T[keyof T];
