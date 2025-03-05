import type {Browser} from './PixelEvents';
import type {WebPixelsManager} from './WebPixelsManager';
import type {RegisterInit} from './RegisterInit';

export interface ExtensionApi {
  readonly settings: Record<string, any>;
  readonly analytics: {
    readonly subscribe: WebPixelsManager['subscribe'];
  };
  readonly browser: Browser;
  readonly init: RegisterInit;
  readonly _pixelInfo: any;
}
