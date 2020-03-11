import {FetchConfig} from './Fetch';

export interface Globals {
  /**
   * Perform a network request
   * @param string url string
   * @param config config object with custom settings for the request
   * @returns a promise resolving to a Response object
   */
  fetch(request: string, config?: FetchConfig): Promise<Response>;

  /** Console object for logging methods */
  console: Console;
}
