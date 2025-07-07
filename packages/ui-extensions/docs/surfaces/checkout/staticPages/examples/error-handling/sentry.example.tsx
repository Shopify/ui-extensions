import {render} from 'preact';
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
export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  return <s-banner>Your extension</s-banner>;
}
