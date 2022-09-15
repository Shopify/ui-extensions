import type {EventBus} from './EventBus';

export interface PublicApi {
  publish: EventBus['publish'];
  publishCustomEvent: EventBus['publishCustomEvent'];
}
