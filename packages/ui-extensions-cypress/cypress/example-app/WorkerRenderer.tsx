// back in WorkerRenderer.tsx
import * as React from 'react';
// import {useMemo, useEffect, ReactNode} from 'react';
import {
  createRemoteReceiver,
  RemoteRenderer,
  // useWorker,
  createController,
} from '@remote-ui/react/host';
import {useWorker} from '@shopify/react-web-worker';

import {createWorkerFactory, expose} from '@shopify/web-worker';

// const createWorker = createWorkerFactory(() => import('./worker'));
const createWorker = createWorkerFactory(
  import(/* webpackChunkName: 'example-scripts' */ '../example-scripts/worker'),
);

// const CONTROLLER = createController({Card, Button});
const CONTROLLER = createController({});
const THIRD_PARTY_SCRIPT = 'https://third-party.com/remote-app.js';

export function WorkerRenderer() {
  const receiver = React.useMemo(() => createRemoteReceiver());
  const worker = useWorker(createWorker);

  React.useEffect(() => {
    worker.run(THIRD_PARTY_SCRIPT, receiver.receive, {
      id: 'gid://User/1',
      async getDetails() {
        const response = await fetch('/user.json');
        const json = await response.json();

        return {occupation: json.occupation};
      },
    });
  }, [receiver, worker]);

  return <RemoteRenderer receiver={receiver} controller={CONTROLLER} />;
}
