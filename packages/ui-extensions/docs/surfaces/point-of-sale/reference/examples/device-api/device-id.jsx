import {render} from 'preact';
import {useState} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  const [deviceId, setDeviceId] = useState('');
  shopify.device.getDeviceId().then((deviceId) => {
    setDeviceId(deviceId);
  });
  return (
    <s-tile
      heading="My App"
      subheading={deviceId}
    />
  );
};
