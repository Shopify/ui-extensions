import type {Browser} from './Browser';
import type {EventBus} from './EventBus';
import type {RegisterInit} from './RegisterInit';

export interface ExtensionApi {
  readonly configuration: Record<string, any>;
  readonly analytics: {
    readonly subscribe: EventBus['subscribe'];
  };
  readonly browser: Browser;
  readonly init: RegisterInit;
  readonly _pixelInfo: any;
}
