import type {Browser} from './PixelEvents';
import type {Events} from './WebPixelsManager';
import type {RegisterInit} from './RegisterInit';
import type {CustomerPrivacyEventBus} from './PrivacyApi';
import type {SubscriberCallback, SubscriberOptions} from './EventBus';

export interface ExtensionApi {
  readonly settings: Record<string, any>;
  readonly analytics: {
    subscribe<K extends string>(
      name: K,
      callback: SubscriberCallback<Events[K]>,
      options?: SubscriberOptions,
    ): () => boolean;
  };
  readonly browser: Browser;
  readonly init: RegisterInit;
  readonly _pixelInfo: any;
  readonly customerPrivacy: {
    readonly subscribe: CustomerPrivacyEventBus['subscribe'];
  };
}
