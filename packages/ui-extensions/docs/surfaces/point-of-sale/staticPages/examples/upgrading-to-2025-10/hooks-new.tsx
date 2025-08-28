import '@shopify/ui-extensions/preact';
import {render} from 'preact';
import {useConnectivitySubscription} from '@shopify/ui-extensions/point-of-sale/preact';

export default function extension() {
  render(<ConnectivityStatus />, document.body);
}

function ConnectivityStatus() {
  const connectivity = useConnectivitySubscription();
  const isConnected = connectivity.internetConnected === 'Connected';

  return (
    <s-text tone={isConnected ? 'success' : 'warning'}>
      Status: {isConnected ? 'Online' : 'Offline'}
    </s-text>
  );
}
