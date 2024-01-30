import type {EventBus} from './EventBus';
import type {VisitorApi} from './VisitorApi';

export interface PublicApi {
  publish: EventBus['publish'];
  publishCustomEvent: EventBus['publishCustomEvent'];
  subscribe: EventBus['subscribe'];
  visitor: VisitorApi['visitor'];
}
