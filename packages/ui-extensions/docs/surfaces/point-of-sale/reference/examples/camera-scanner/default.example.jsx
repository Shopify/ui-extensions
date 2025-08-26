import {render} from 'preact';
import {useState, useEffect} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  const [scanData, setScanData] = useState('');

  useEffect(() => {
    const unsubscribe = shopify.scanner.scannerData.current.subscribe((result) => {
      setScanData(result.data || '');
    });
    return unsubscribe;
  }, []);

  return (
    <s-screen name="Camera Scanner Title" title="CameraScanner">
      <s-camera-scanner />
      <s-text>Scanned data: {scanData}</s-text>
    </s-screen>
  );
};