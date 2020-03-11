/**
 * Configurations for a fetch request
 */
export type FetchConfig = {
  /** HTTP method */
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';

  /** Array of headers */
  headers?: string[][];

  /** utf8 encoded string */
  body?: string;
};

/**
 * Response interface
 * @property status the HTTP status code
 * @property ok boolean value if the status is 200..299
 */
export interface Response {
  /**
   * Converts the response body to its JSON representation
   * @returns a Promise resolving to JSON (string, number, object, array)
   */
  json(): Promise<object>;

  /**
   * Converts the response body to a utf8 encoded string
   * @returns a Promise resolving to the string
   */
  text(): Promise<string>;

  /** HTTP status code */
  status: number;

  /** true if response status code is 2xx */
  ok: boolean;
}
