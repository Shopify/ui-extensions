import type {AppEvents} from '../../../../shared';

export interface AppEventsApi {
  /** Reports app-defined events to Shopify. */
  appEvents: AppEvents;
}
