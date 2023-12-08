import {
  reactExtension,
  Banner,
} from '@shopify/ui-extensions-react/customer-account';
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
    new Error(error.message),
  );
});

// Your normal extension code.
export default reactExtension(
  'customer-account.order-status.block.render',
  () => <Extension />,
);

function Extension() {
  return <Banner>Your extension</Banner>;
}
