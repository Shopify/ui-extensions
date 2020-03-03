export interface Action {
  content: string;
  destructive?: boolean;
  onAction?: () => void;
}
