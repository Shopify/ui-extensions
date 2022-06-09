import * as React from 'react';
// import {useCallback, useState} from 'react';
// import { useWorker } from "@remote-ui/react/host";
import {useWorker} from '@shopify/react-web-worker';

import {createWorkerFactory} from '@shopify/web-worker';
import {createIframeWorkerMessenger} from './messenger';

const createWorker = createWorkerFactory(
  () => import(/* webpackChunkName: 'example' */ '../example-scripts/worker'),
  // new URL('/worker.js', location.href).toString(),
);

export default function App() {
  const worker = useWorker(createWorker, {
    createMessenger: createIframeWorkerMessenger,
  });
  // const worker = useWorker(createWorker);

  const [toastActive, setToastActive] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState('');
  const dismissToast = React.useCallback(() => setToastActive(false), []);

  // const showJavascriptMessageChannel = useCallback(() => {
  //   location.href = '/message-channel/index.html';
  // }, []);

  const loadExtension = React.useCallback(async () => {
    await worker.load(new URL('/external-script.js', location.href).toString());
  }, []);

  const renderExtension = React.useCallback(async () => {
    await worker.render('Playground', {
      toast: {
        show: (message) => {
          setToastMessage(message);
          setToastActive(true);
        },
      },
    });
  }, []);

  return (
    <section>
      <h1>Remote UI deep dive"</h1>
      <p>Inspect the page to see console log</p>
      <article>
        {/* <button onClick={showJavascriptMessageChannel}>
          Show Javascript Message Channel
        </button> */}
        <button onClick={loadExtension}>Load extension</button>
        <button onClick={renderExtension}>Render extension</button>
      </article>
      {toastActive ? <button onClick={dismissToast}>TOAST</button> : null}
      {/* // <Toast content={toastMessage} onDismiss={dismissToast} /> */}
    </section>
  );
}
