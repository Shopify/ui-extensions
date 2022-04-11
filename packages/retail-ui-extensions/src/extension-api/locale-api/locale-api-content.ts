export interface LocaleApiContent {
  /** IETF-formatted locale at time of page load */
  initialValue: string;

  /** Callback when user changes locale during runtime */
  setOnChange(onChange: (locale: string) => void): void;
}
