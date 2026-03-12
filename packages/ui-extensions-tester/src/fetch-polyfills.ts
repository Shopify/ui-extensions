/**
 * Minimal polyfills for the standard `Request` and `Response` classes.
 *
 * Jest 27's test environments (both `jsdom` and `node`) do not forward the
 * fetch-API globals that Node 18+ provides.  These polyfills are installed
 * on `globalThis` during `setUp()` so that both the tester's own code and
 * user test code can use `new Request()` / `new Response()`.
 */

function notImplemented(name: string): never {
  throw new Error(
    `${name}() is not implemented by the @shopify/ui-extensions-tester polyfill.`,
  );
}

class BodyBase {
  readonly bodyUsed: boolean = false;
  protected _body: string;

  constructor(body?: BodyInit | null) {
    this._body = body == null ? '' : String(body);
  }

  get body(): Response['body'] {
    return null;
  }

  async arrayBuffer(): Promise<ArrayBuffer> {
    const encoder = new TextEncoder();
    return encoder.encode(this._body).buffer as ArrayBuffer;
  }

  async blob(): Promise<Blob> {
    return notImplemented('blob');
  }

  // The return type uses `any` to bridge TS 4.x (where Uint8Array is not
  // generic) and TS 5.7+ (where Body.bytes() returns Promise<Uint8Array<ArrayBuffer>>).
  async bytes(): Promise<any> {
    const encoder = new TextEncoder();
    return encoder.encode(this._body);
  }

  async formData(): Promise<FormData> {
    return notImplemented('formData');
  }

  async json(): Promise<any> {
    return JSON.parse(this._body);
  }

  async text(): Promise<string> {
    return this._body;
  }
}

class ResponsePolyfill extends BodyBase implements Response {
  static error(): Response {
    return new ResponsePolyfill(null, {status: 0, statusText: ''});
  }

  static redirect(url: string | URL, status = 302): Response {
    const res = new ResponsePolyfill(null, {status, statusText: ''});
    (res as {url: string}).url = String(url);
    (res as {redirected: boolean}).redirected = true;
    return res;
  }

  static json(data: unknown, init?: ResponseInit): Response {
    const body = JSON.stringify(data);
    const headers = new Headers(init?.headers);
    if (!headers.has('content-type')) {
      headers.set('content-type', 'application/json');
    }
    return new ResponsePolyfill(body, {...init, headers});
  }

  readonly headers: Headers;
  readonly ok: boolean;
  readonly redirected: boolean = false;
  readonly status: number;
  readonly statusText: string;
  readonly type: ResponseType = 'basic';
  readonly url: string = '';

  constructor(body?: BodyInit | null, init?: ResponseInit) {
    super(body);
    this.status = init?.status ?? 200;
    this.statusText = init?.statusText ?? '';
    this.ok = this.status >= 200 && this.status < 300;
    this.headers = new Headers(init?.headers);
  }

  clone(): Response {
    return new ResponsePolyfill(this._body, {
      status: this.status,
      statusText: this.statusText,
      headers: this.headers,
    });
  }
}

class RequestPolyfill extends BodyBase implements Request {
  readonly cache: RequestCache = 'default';
  readonly credentials: RequestCredentials = 'same-origin';
  readonly destination: RequestDestination = '' as RequestDestination;
  readonly headers: Headers;
  readonly integrity: string = '';
  readonly keepalive: boolean = false;
  readonly method: string;
  readonly mode: RequestMode = 'cors';
  readonly redirect: RequestRedirect = 'follow';
  readonly referrer: string = 'about:client';
  readonly referrerPolicy: ReferrerPolicy = '';
  readonly signal: AbortSignal =
    typeof AbortController === 'undefined'
      ? (undefined as any)
      : new AbortController().signal;

  readonly url: string;

  constructor(input: RequestInfo | URL, init?: RequestInit) {
    super(init?.body);
    if (typeof input === 'string') {
      this.url = input;
    } else if (input instanceof URL) {
      this.url = input.href;
    } else {
      // input is a Request-like object
      this.url = input.url;
    }

    this.method = (init?.method ?? 'GET').toUpperCase();
    this.headers = new Headers(init?.headers);

    if (init?.cache !== undefined)
      (this as {cache: RequestCache}).cache = init.cache;
    if (init?.credentials !== undefined)
      (this as {credentials: RequestCredentials}).credentials =
        init.credentials;
    if (init?.integrity !== undefined)
      (this as {integrity: string}).integrity = init.integrity;
    if (init?.keepalive !== undefined)
      (this as {keepalive: boolean}).keepalive = init.keepalive;
    if (init?.mode !== undefined)
      (this as {mode: RequestMode}).mode = init.mode;
    if (init?.redirect !== undefined)
      (this as {redirect: RequestRedirect}).redirect = init.redirect;
    if (init?.referrer !== undefined)
      (this as {referrer: string}).referrer = init.referrer;
    if (init?.referrerPolicy !== undefined)
      (this as {referrerPolicy: ReferrerPolicy}).referrerPolicy =
        init.referrerPolicy;
    if (init?.signal !== undefined && init.signal !== null)
      (this as {signal: AbortSignal}).signal = init.signal;
  }

  clone(): Request {
    return new RequestPolyfill(this.url, {
      method: this.method,
      headers: this.headers,
      body: this._body || undefined,
      cache: this.cache,
      credentials: this.credentials,
      integrity: this.integrity,
      keepalive: this.keepalive,
      mode: this.mode,
      redirect: this.redirect,
      referrer: this.referrer,
      referrerPolicy: this.referrerPolicy,
    });
  }
}

const POLYFILLED = Symbol.for('ui-extensions-tester:fetch-polyfilled');

interface PolyfillRecord {
  Response?: boolean;
  Request?: boolean;
}

/**
 * Installs `Response` and `Request` on `globalThis` when they are missing.
 * Call from `setUp()`.
 */
export function installFetchPolyfills(): void {
  const record: PolyfillRecord = (globalThis as any)[POLYFILLED] ?? {};

  if (typeof globalThis.Response === 'undefined') {
    (globalThis as any).Response = ResponsePolyfill;
    record.Response = true;
  } else {
    record.Response = false;
  }

  if (typeof globalThis.Request === 'undefined') {
    (globalThis as any).Request = RequestPolyfill;
    record.Request = true;
  } else {
    record.Request = false;
  }

  (globalThis as any)[POLYFILLED] = record;
}

/**
 * Removes only the polyfills that `installFetchPolyfills` added.
 * Call from `tearDown()`.
 */
export function uninstallFetchPolyfills(): void {
  const record: PolyfillRecord = (globalThis as any)[POLYFILLED] ?? {};

  if (record.Response) {
    delete (globalThis as any).Response;
  }

  if (record.Request) {
    delete (globalThis as any).Request;
  }

  delete (globalThis as any)[POLYFILLED];
}
