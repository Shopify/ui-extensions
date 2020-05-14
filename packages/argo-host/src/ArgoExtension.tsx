import React, {useEffect, useMemo, useState} from 'react';
import {ExtensionPoint, ExtensionInput} from '@shopify/argo';
import {retain} from '@shopify/remote-ui-core';
import {RemoteReceiver, RemoteRenderer} from '@shopify/remote-ui-react/host';

import {Worker} from './worker';

export enum ReadyState {
  Loading,
  Rendering,
  Rendered,
  RenderErrorTimeout,
}

export interface ArgoExtensionsProps<T extends ExtensionPoint> {
  extensionPoint: T;
  script?: URL | string;
  components?: {[key: string]: any};
  input: ExtensionInput[T];
  receiver?: RemoteReceiver;
  worker: Worker;
  onReadyStateChange?: (readyState: ReadyState) => void;
}

const RENDER_TIMEOUT_INTERVAL = 5000;

export function ArgoExtension<T extends ExtensionPoint>({
  extensionPoint,
  script,
  components = {},
  input,
  receiver: externalReceiver,
  worker,
  onReadyStateChange,
}: ArgoExtensionsProps<T>) {
  const [readyState, setReadyState] = useState(ReadyState.Loading);
  const receiver = useMemo(() => externalReceiver || new RemoteReceiver(), [externalReceiver]);

  useEffect(() => onReadyStateChange?.(readyState), [readyState, onReadyStateChange]);

  useEffect(() => {
    if (readyState === ReadyState.Rendered) {
      return;
    }
    const id = setTimeout(() => {
      setReadyState(ReadyState.RenderErrorTimeout);
    }, RENDER_TIMEOUT_INTERVAL);
    return () => {
      clearTimeout(id);
    };
  }, [readyState]);

  useEffect(() => {
    (async () => {
      if (!script) {
        return;
      }
      setReadyState(ReadyState.Loading);
      await worker.load(typeof script === 'string' ? script : script.href);
    })();
  }, [script, worker]);

  useEffect(() => {
    (async () => {
      if (!script) {
        return;
      }
      await worker.render(extensionPoint, input, Object.keys(components), (type, ...args) => {
        // Have a proper fix in remote-ui core library later
        // Ref: https://github.com/Shopify/app-extension-libs/issues/436#issuecomment-622008563
        retain(args);

        return receiver.receive(type, ...args);
      });
    })();
  }, [components, extensionPoint, input, receiver, script, worker]);

  useEffect(() => {
    return receiver.listen(receiver.root, () => {
      if (receiver.root.children.length) {
        setReadyState(ReadyState.Rendered);
      }
    });
  }, [receiver]);

  if (!script) {
    return null;
  }

  return <RemoteRenderer receiver={receiver} components={components} />;
}
