import {render} from 'preact';
import {useState} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  const [isTablet, setIsTablet] = useState(false);
  shopify.device.isTablet().then((isTablet) => {
    setIsTablet(isTablet);
  });
  return (
    <s-tile
      heading="My App"
      disabled={!isTablet}
    />
  );
};
