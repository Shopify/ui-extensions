export interface Toast {
  message: string;
  error?: boolean;
  onDismiss?: () => void;
}
