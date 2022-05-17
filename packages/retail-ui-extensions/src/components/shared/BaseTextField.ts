export interface BaseTextFieldProps {
  title?: string;
  subtitle?: string;
  initialValue?: string;
  hint?: string;
  isValid?: boolean;
  errorMessage?: string;
  onChangeText?: (value: string) => void;
}
