import {useEffect, useMemo} from 'react';
import {WorkerCreator, createIframeWorkerMessenger} from '@shopify/web-worker';
import {Sandbox} from './sandbox';

interface Options {
  extension: string | URL;
  createWorker: WorkerCreator<any>;
  createMessenger?: typeof createIframeWorkerMessenger;
}

export function useExtensionSandbox({extension, createWorker, createMessenger}: Options) {
  const sandbox = useMemo(() => new Sandbox(extension, createWorker({createMessenger})), [
    createWorker,
    extension,
    createMessenger,
  ]);

  useEffect(() => {
    sandbox.start();

    return () => {
      sandbox.terminate();
    };
  }, [sandbox]);

  return sandbox;
}
