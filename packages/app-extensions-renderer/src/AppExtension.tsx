import React, {useEffect, useMemo} from 'react';
import {IfAllOptionalKeys} from '@shopify/useful-types';
import {RemoteReceiver} from '@shopify/remote-ui-core';
import {RemoteRenderer} from '@shopify/remote-ui-react/host';
import {WorkerCreator} from '@shopify/web-worker';
import {RenderRoot, DataTypeForRoot} from './types';

import {useExtensionSandbox} from './hooks';
import {Sandbox} from './sandbox';

type Extension = URL | string;

type Props<Root extends RenderRoot> = {
  root: Root;
  createWorker: WorkerCreator<any>;
  extension?: Extension;
  components?: {[key: string]: any};
} & IfAllOptionalKeys<
  DataTypeForRoot<Root>,
  {data?: DataTypeForRoot<Root>},
  {data: DataTypeForRoot<Root>}
>;

export function AppExtension<Root extends RenderRoot>({extension, ...rest}: Props<Root>) {
  return !extension ? null : <ExtensionRenderer {...(rest as any)} extension={extension} />;
}

function ExtensionRenderer<Root extends RenderRoot>({
  root,
  extension,
  createWorker,
  components = {},
  data = {},
}: Required<Props<Root>>) {
  const sandbox = useExtensionSandbox({extension: extension as Extension, createWorker});
  const renderer = useMemo(() => new Renderer(root, data, sandbox), [data, root, sandbox]);

  useEffect(() => {
    renderer.render();
  }, [renderer]);

  return <RemoteRenderer key={sandbox.id} receiver={renderer.receiver} components={components} />;
}

class Renderer<Root extends RenderRoot> {
  readonly receiver = new RemoteReceiver();

  constructor(
    private readonly root: Root,
    private readonly data: any,
    private readonly sandbox: Sandbox,
  ) {}

  render() {
    this.sandbox.render(this.root, this.data, this.receiver.receive);
  }
}
