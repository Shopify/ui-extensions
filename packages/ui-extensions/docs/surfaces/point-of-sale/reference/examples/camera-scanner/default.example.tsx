import '@shopify/ui-extensions/point-of-sale/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  return (
    <s-screen
          name="CameraScanner"
          title="Camera Scanner Title"
        >
          <s-camera-scanner />
          <s-text>{`Scanned data: ${data || ''}`}</s-text>
        </s-screen>
  );
}