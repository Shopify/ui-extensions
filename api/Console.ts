export interface Console {
  /**
   * Writes a message to the console
   * @param message
   * @param optionalParams
   */
  log(message?: any, ...optionalParams: any[]): void;

  /**
   * Writes an error message to the console
   * @param message
   * @param optionalParams
   */
  error(message?: any, ...optionalParams: any[]): void;
}
