import {
  reactExtension,
  Banner,
} from '@shopify/ui-extensions-react/checkout';
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
export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  return <Banner>Your extension</Banner>;
}
