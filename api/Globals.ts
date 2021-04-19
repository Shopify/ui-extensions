import {Console} from './Console';
import {Config, Response} from './Fetch';

export interface Globals {
  /** Console object for logging methods */
  console: Console;

  /**
   * Perform a network request
   * @param string url string
   * @param config config object with custom settings for the request
   * @returns a promise resolving to a Response object
   */
  fetch(request: string, config?: Config): Promise<Response>;

  /**
   * Creates a new timer which executes the callback after specified number of milliseconds
   * @param callback method that will be called
   * @param milliseconds number of milliseconds before method is called
   * @returns id for the timer which can be used to cancel with `clearTimeout`
   */
  setTimeout(callback: () => void, milliseconds: number): number;

  /**
   * Prevent the function set with the setTimeout() to execute:
   * @param id value returned from the `setTimeout` method
   */
  clearTimeout(id: number): void;
}
