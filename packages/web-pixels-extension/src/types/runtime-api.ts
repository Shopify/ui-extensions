import type {StandardEventsV0} from './standard-events-V0';
import type {StandardEventsV1} from './standard-events-V1';

// Standard Events
type StandardEvent = StandardEventsV0 | StandardEventsV1;
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
    channel: string,
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
  location?: {
    href: string;
    host: string;
    hostname: string;
    origin: string;
  };
  referrer?: string;
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

// Publish Runtime API
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
  readonly sendBeacon: (
    url: string | URL,
    data?: Record<string, unknown> | null,
  ) => Promise<boolean>;
}

export interface WebPixelAPI {
  configuration: Configuration;
  analytics: AnalyticsAPI;
  browser: BrowserAPI;
  readonly _pixelInfo: Record<string, unknown>;
}
