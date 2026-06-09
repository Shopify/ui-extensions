import {render} from 'preact';
import {useState, useEffect} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  const [scanData, setScanData] = useState('');
  const [scanSource, setScanSource] = useState('');
  const [hasCameraScanner, setHasCameraScanner] = useState(false);
  const [hasExternalScanner, setHasExternalScanner] = useState(false);

  useEffect(() => {
    // This example doesn't call showCameraScanner(). Scan data
    // arrives from external/embedded scanners, or from the camera
    // if opened elsewhere — scannerData is shared globally.
    const unsubscribeData = shopify.scanner.scannerData.current.subscribe((result) => {
      setScanData(result.data || '');
      setScanSource(result.source || '');
    });

    const unsubscribeSources = shopify.scanner.sources.current.subscribe((sources) => {
      setHasCameraScanner(sources.includes('camera'));
      setHasExternalScanner(sources.includes('external'));
    });

    return () => {
      unsubscribeData();
      unsubscribeSources();
    };
  }, []);

  return (
    <s-page heading="Scanner Example">
      <s-stack direction="block">
        <s-text>Scanned data: {scanData}</s-text>
        <s-text>Scanned data source: {scanSource}</s-text>
        {hasCameraScanner && (
          <s-text>Camera scanner is available</s-text>
        )}
        {hasExternalScanner && (
          <s-text>External scanner is available</s-text>
        )}
      </s-stack>
    </s-page>
  );
};
