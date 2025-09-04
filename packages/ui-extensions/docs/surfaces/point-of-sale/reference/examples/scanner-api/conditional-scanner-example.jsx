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
    <s-navigator>
      <s-screen name="Scanner" title="Scanner Example">
        <s-stack direction="vertical">
          <s-text>Scanned data: {scanData}</s-text>
          <s-text>Scanned data source: {scanSource}</s-text>
          {hasCameraScanner && (
            <s-button onClick={() => shopify.scanner.scanQRCode()}>
              Scan QR Code
            </s-button>
          )}
          {hasExternalScanner && (
            <s-text>External scanner is available</s-text>
          )}
        </s-stack>
      </s-screen>
    </s-navigator>
  );
};
