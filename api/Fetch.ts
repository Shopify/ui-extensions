interface Fetch {
    /**
     * Perform a network request
     * @param request url string, or a Request object
     * @param config config object with custom settings for the request
     * @returns a promise resolving to a Response object
     */
    fetch(request: string|Request, config?: Object): Promise<Response>;

    /**
     * Config properties
     * method: ('POST'|'GET'|'PUT'|'DELETE')
     * headers: an array of key-value pairs
     * body: utf8 encoded string
     */
}

/**
 * Request interface
 * @property method ('POST'|'GET'|'PUT'|'DELETE')
 * @property headers Headers object, or array of key-value pairs
 * @property body utf8 encoded string for the body
 */
interface Request {
    method: string;
    headers?: Headers|[string, string][];
    body: string;
}

/**
 * Headers interface
 */
interface Headers {
    /**
     * Append a new header
     * @param name header nane
     * @param value header value
     */
    append(name: string, value: string): void;

    /**
     * Get the value for a header
     * @param name the name of the HTTP header
     * @returns string value for the header, or undefined if none found
     */
    get(name: string): string | undefined;

    /**
     * Sets the value for a header
     * @param name the name of the HTTP header
     * @param value value for the header
     */
    set(name: string, value: string): void;

    /**
     * Removes a header
     * @param name the name of the header to remove
     */
    delete(name: string): void;

    /**
     * Retreive all the headers
     * @returns array of key-value pairs
     */
    entries(): [string, string][];

    /**
     * Determine if a header has been set
     * @param name the name of the header to check
     * @returns boolean value
     */
    has(name: string): boolean;

    /**
     * Returns all the header names
     * @returns array of header names
     */
    keys(): string[];

    /**
     * Returns all the header values
     * @returns array of header values
     */
    values(): string[];
}

/**
 * Response interface
 * @property status the HTTP status code
 * @property ok boolean value if the status is 200..299
 */
interface Response {
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

    status: number;

    ok: boolean;
}
