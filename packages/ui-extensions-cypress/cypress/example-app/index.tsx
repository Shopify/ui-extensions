import * as React from 'react';
import {useWorker} from '@shopify/react-web-worker';
import {
  AppProvider,
  Frame,
  Card,
  Stack,
  Button,
  ButtonGroup,
  Toast,
} from '@shopify/polaris';
import '@shopify/polaris/build/esm/styles.css';

// TODO: Figure out what's up with the missing API here?
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
    <AppProvider i18n={{}}>
      <Frame>
        <Card title="Testing UI Ext. Components w/ Cypress">
          <Card.Section>
            <Stack spacing="loose" vertical>
              <p>Load an external script, then press "render" to execute it</p>
              <p>Inspect the page to see console log</p>
              <br />
            </Stack>
            <Stack spacing="loose" distribution="trailing">
              <ButtonGroup>
                <Button primary onClick={loadExtension}>
                  Load extension
                </Button>
                <Button onClick={renderExtension}>Render extension</Button>
              </ButtonGroup>
            </Stack>
          </Card.Section>
        </Card>
        {toastActive ? (
          <Toast content={toastMessage} onDismiss={dismissToast} />
        ) : null}
      </Frame>
    </AppProvider>
  );
}
