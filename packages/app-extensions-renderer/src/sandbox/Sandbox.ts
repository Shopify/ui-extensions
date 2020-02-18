import {RemoteChannel} from '@shopify/remote-ui-core';
import {terminate} from '@shopify/web-worker';
import {RenderRoot, DataTypeForRoot} from '../types';

export class Sandbox {
  private started = false;
  private onceStarted = new Set<() => void>();

  get id() {
    return typeof this.extension === 'string' ? this.extension : this.extension.href;
  }

  constructor(private readonly extension: string | URL, private readonly worker: any) {}

  async start() {
    if (this.started) {
      throw new Error('Already loaded');
    }

    await this.worker.load(
      typeof this.extension === 'string' ? this.extension : this.extension.href,
    );

    this.started = true;

    for (const onceStarted of this.onceStarted) {
      onceStarted();
    }

    this.onceStarted.clear();
  }

  async render<Root extends RenderRoot>(
    root: Root,
    data: DataTypeForRoot<Root>,
    receive: RemoteChannel,
  ) {
    const perform = () => this.worker.render(root, data, receive);

    if (this.started) {
      await perform();
    } else {
      await new Promise(resolve => {
        this.onceStarted.add(() => {
          resolve(perform());
        });
      });
    }
  }

  terminate() {
    terminate(this.worker);
  }
}
