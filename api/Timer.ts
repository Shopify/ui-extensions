export interface Globals {
  /**
   * Creates a new timer which executes the callback after specified number of milliseconds
   * @param callback method that will be called
   * @param milliseconds number of milliseconds before method is called
   * @returns id for the timer which can be used to cancel with `clearTimeout`
   */
  setTimeout(callback: any, milliseconds: number): number;

  /**
   * Prevent the function set with the setTimeout() to execute:
   * @param id value returned from the `setTimeout` method
   */
  clearTimeout(id: number): void;
}
