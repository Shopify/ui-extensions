export interface TextField {
  value: string;
  placeHolder?: string;
  helpText?: string;
  multiline: boolean | number;

  onBlur: () => void;
  onFocus: () => void;
  onAfterChange: (value: string) => void;
}
