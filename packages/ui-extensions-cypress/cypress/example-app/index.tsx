import * as React from 'react';
import {useWorker} from '@shopify/react-web-worker';
// import {useToast} from '@shopify/admin-ui-extensions-react';

import {createWorkerFactory} from '@shopify/web-worker';
import {createIframeWorkerMessenger} from './messenger';

const createWorker = createWorkerFactory(
  () =>
    import(
      /* webpackChunkName: 'worker' */ '../example-scripts/shopify-remote-worker'
    ),
  // new URL('/worker.js', location.href).toString(),
);

export default function App() {
  const worker = useWorker(createWorker, {
    createMessenger: createIframeWorkerMessenger,
  });
  // const toastAPI = useToast();
  console.warn('Registered Worker Methods', worker, Object.keys(worker));

  const [toastActive, setToastActive] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState('');
  const dismissToast = React.useCallback(() => setToastActive(false), []);

  const loadExtension = React.useCallback(async () => {
    await worker.load(new URL('/external-script.js', location.href).toString());
  }, []);

  const renderExtension = React.useCallback(async () => {
    await worker.render('Playground', {
      toast: {
        show: (message) => {
          setToastMessage(message);
          setToastActive(true);
          // toastAPI.showToast(message);
        },
      },
    });
  }, []);

  return (
    <section>
      <h1>Remote UI deep dive"</h1>
      <p>Inspect the page to see console log</p>
      <article>
        <button onClick={loadExtension}>Load extension</button>
        <button onClick={renderExtension}>Render extension</button>
      </article>
      {toastActive ? (
        <button onClick={dismissToast}>Toast Message Sent!</button>
      ) : null}
    </section>
  );
}
