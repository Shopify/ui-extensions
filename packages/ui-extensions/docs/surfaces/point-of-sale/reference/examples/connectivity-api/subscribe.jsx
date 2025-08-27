import {render} from 'preact';
import {useState, useEffect} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  const [isConnected, setIsConnected] = useState(
    shopify.connectivity.current.value.internetConnected === 'Connected'
  );

  useEffect(() => {
    const unsubscribe = shopify.connectivity.current.subscribe((newConnectivity) => {
      setIsConnected(newConnectivity.internetConnected === 'Connected');
    });
    return unsubscribe;
  }, []);

  return (
    <s-tile
      heading="My App"
      disabled={!isConnected}
    />
  );
};
