import type {WebPixelsManager} from './WebPixelsManager';
import type {VisitorApi} from './VisitorApi';

export interface PublicApi {
  publish: WebPixelsManager['publish'];
  publishCustomEvent: WebPixelsManager['publishCustomEvent'];
  visitor: VisitorApi['visitor'];
}
