import {
  render,
  Banner,
} from '@shopify/checkout-ui-extensions-react';
import * as Sentry from '@sentry/browser';

Sentry.init({
  dsn: 'https://examplePublicKey@o0.ingest.sentry.io/0',
  defaultIntegrations: false,
});

self.addEventListener(
  'unhandledrejection',
  (error) => {
    Sentry.captureException(
      new Error(error.reason.stack),
    );
  },
);

self.addEventListener('error', (error) => {
  Sentry.captureException(
    new Error(error.reason.stack),
  );
});

// Your normal extension code.
render('Checkout::Dynamic::Render', () => (
  <App />
));

function App() {
  return <Banner>Your extension</Banner>;
}
