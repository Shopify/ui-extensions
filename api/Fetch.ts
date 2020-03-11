export interface Fetch {
  /**
   * Perform a network request
   * @param string url string
   * @param config config object with custom settings for the request
   * @returns a promise resolving to a Response object
   */
  fetch(request: string, config?: Config): Promise<Response>;

  /**
   * Config properties
   * method: ('POST'|'GET'|'PUT'|'DELETE')
   * headers: an array of key-value pairs
   * body: utf8 encoded string
   */
}

/**
 * Configurations for a fetch request
 */
export type Config = {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: string[][];
  body?: string; // utf8 encoded string
};

/**
 * Response interface
 * @property status the HTTP status code
 * @property ok boolean value if the status is 200..299
 */
export interface Response {
  /**
   * Converts the response body to its JSON representation
   * @returns a Promise resolving to the JSON string
   */
  json(): Promise<string>;

  /**
   * Converts the response body to a utf8 encoded string
   * @returns a Promise resolving to the string
   */
  text(): Promise<string>;

  status: number; // HTTP status code

  ok: boolean; // true if response status code is 2xx
}
