import type {StandardEventsV0} from './standard-events-V0';
import type {StandardEventsV1} from './standard-events-V1';

type StandardEvents = StandardEventsV0 | StandardEventsV1;
const SCHEMA_VERSIONS = ['v0', 'v1'] as const;
type SchemaVersion = typeof SCHEMA_VERSIONS[number];

export interface RuntimeAPI {
  configuration: Configuration;
  analytics: AnalyticsAPI;
  client: ClientAPI;
}

type Configuration = Record<string, any>;

interface AnalyticsAPI {
  readonly subscribe: EventBus['subscribe'];
}

type EventCallback = (
  event: StandardEvents,
  metadata?: EventCallbackMetadata,
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

interface EventBus {
  subscribe: (
    channel: string,
    callback: EventCallback,
    options?: SubscribeOptions,
  ) => () => boolean;
}

type EventBusSubscribeOptions = Record<string, unknown>;
interface SubscribeOptions extends EventBusSubscribeOptions {
  schemaVersion?: SchemaVersion;
}

interface ClientAPI {
  readonly cookie: {
    get: (name?: string) => Promise<string>;
    set: (cookieOrName: string, value?: string) => Promise<string>;
  };
  readonly origin: {
    get: () => Promise<string>;
  };
  readonly sendBeacon: (
    url: string | URL,
    data?: BodyInit | null,
  ) => Promise<boolean>;
}
