import type {StandardEventsV0, StandardEventNameV0} from './StandardEventsV0';
import type {StandardEventsV1, StandardEventNameV1} from './StandardEventsV1';

// Standard Events
type StandardEvent = StandardEventsV0 | StandardEventsV1;
type StandardEventName = StandardEventNameV0 | StandardEventNameV1;
const SCHEMA_VERSIONS = ['v0', 'v1'] as const;
export type SchemaVersion = typeof SCHEMA_VERSIONS[number];

// Event Bus
export type EventBusChannel = string;

export type EventBusPublishPayload = Record<string, unknown>;
export type EventBusPublishOptions = Record<string, unknown>;
export type EventBusPublish<T> = (
  eventName: EventBusChannel,
  payload: T,
  options?: EventBusPublishOptions,
) => boolean;

export type EventBusSubscribeCallback<T> = (event: T) => void;
export type EventBusSubscribe<T> = (
  eventName: EventBusChannel,
  callback: EventBusSubscribeCallback<T>,
  options?: EventBusSubscribeOptions,
) => () => boolean;

interface EventBus {
  subscribe: (
    channel: StandardEventName,
    callback: WebPixelCallback,
    options?: SubscribeOptions,
  ) => () => boolean;
}

export type EventBusSubscribeOptions = Record<string, unknown>;

interface SubscribeOptions extends EventBusSubscribeOptions {
  schemaVersion?: SchemaVersion;
}

// Web Pixel Manager
export type WebPixelInputPayload = Record<string, any>;
export interface WebPixelPublishPayload extends EventBusPublishPayload {
  channel: EventBusChannel;
  inputPayload: WebPixelInputPayload;
  metadata: EventCallbackMetadata;
}

export type WebPixelCallback = (
  event: StandardEvent,
  metadata: EventCallbackMetadata,
) => void;

interface EventCallbackMetadata {
  location: {
    href: string;
    host: string;
    hostname: string;
    origin: string;
  };
  referrer: string;
}

export interface WebPixelSubscribeOptions extends EventBusSubscribeOptions {
  schemaVersion?: SchemaVersion;
}

export interface WebPixelEventBus {
  publish: EventBusPublish<WebPixelPublishPayload>;
  subscribe: (
    channel: string,
    callback: WebPixelCallback,
    options?: WebPixelSubscribeOptions,
  ) => () => boolean;
}

// Public Web Pixel API
type Configuration = Record<string, any>;

interface AnalyticsAPI {
  readonly subscribe: EventBus['subscribe'];
}

interface BrowserAPI {
  readonly cookie: {
    get: (name?: string) => Promise<string>;
    set: (cookieOrName: string, value?: string) => Promise<string>;
  };
  readonly origin: {
    get: () => Promise<string>;
  };
  readonly sendBeacon: (url: string | URL, data?: string) => Promise<boolean>;
  readonly localStorage: {
    setItem: (key: string, value: any) => void;
    getItem: (key: string) => Promise<string | null>;
    key: (index: number) => Promise<string | null>;
    removeItem: (key: string) => void;
    clear: () => void;
    length: () => Promise<number | null>;
  };
  readonly sessionStorage: {
    setItem: (key: string, value: any) => void;
    getItem: (key: string) => Promise<string | null>;
    key: (index: number) => Promise<string | null>;
    removeItem: (key: string) => void;
    clear: () => void;
    length: () => Promise<number | null>;
  };
}

export interface WebPixelAPI {
  readonly configuration: Configuration;
  readonly analytics: AnalyticsAPI;
  readonly browser: BrowserAPI;
  readonly _pixelInfo: Record<string, unknown>;
}
