export interface BaseTextFieldProps {
  title?: string;
  subtitle?: string;
  initialValue?: string;
  placeholder?: string;
  isValid?: boolean;
  errorMessage?: string;
  onChangeText?: (value: string) => void;
}
