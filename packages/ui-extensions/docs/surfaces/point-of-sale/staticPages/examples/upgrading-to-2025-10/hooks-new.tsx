import '@shopify/ui-extensions/preact';
import {render} from 'preact';
import {useState, useEffect} from 'preact/hooks';

export default function extension() {
  render(<ConnectivityStatus />, document.body);
}

function ConnectivityStatus() {
  const [isConnected, setIsConnected] = useState(
    shopify.connectivity.current.value.internetConnected === 'Connected',
  );

  useEffect(() => {
    const unsubscribe = shopify.connectivity.current.subscribe(
      (newConnectivity) => {
        setIsConnected(newConnectivity.internetConnected === 'Connected');
      },
    );
    return unsubscribe;
  }, []);

  return (
    <s-text tone={isConnected ? 'success' : 'warning'}>
      Status: {isConnected ? 'Online' : 'Offline'}
    </s-text>
  );
}
