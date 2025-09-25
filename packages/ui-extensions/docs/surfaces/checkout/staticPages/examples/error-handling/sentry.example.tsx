import '@shopify/ui-extensions/preact';
import {render} from 'preact';
import * as Sentry from '@sentry/browser';

Sentry.init({
  dsn: 'https://examplePublicKey@o0.ingest.sentry.io/0',
  defaultIntegrations: false,
});

window.addEventListener(
  'unhandledrejection',
  (error) => {
    Sentry.captureException(error);
  },
);

window.addEventListener('error', (error) => {
  Sentry.captureException(error);
});

// Your normal extension code.
export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  return <s-banner>Your extension</s-banner>;
}
