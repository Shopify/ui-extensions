import {render} from 'preact';
import {useState, useEffect} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  const [scanData, setScanData] = useState('');
  const [scanSource, setScanSource] = useState('');
  const [scanHistory, setScanHistory] = useState([]);

  useEffect(() => {
    const unsubscribe = shopify.scanner.scannerData.current.subscribe(
      (result) => {
        if (result.data) {
          setScanData(result.data);
          setScanSource(result.source || 'unknown');
          setScanHistory((prev) => [
            {
              data: result.data,
              source: result.source,
              timestamp: new Date().toLocaleTimeString(),
            },
            ...prev,
          ]);
        }
      },
    );

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <s-page heading="Scanner Data">
      <s-scroll-box>
        <s-stack direction="block">
          <s-section heading="Latest Scan">
            {scanData ? (
              <>
                <s-text>Data: {scanData}</s-text>
                <s-text>Source: {scanSource}</s-text>
              </>
            ) : (
              <s-text>Waiting for scan...</s-text>
            )}
          </s-section>
          {scanHistory.length > 0 && (
            <s-section heading="Recent Scans">
              {scanHistory.map((scan, index) => (
                <s-text key={index}>
                  [{scan.timestamp}] {scan.data} ({scan.source})
                </s-text>
              ))}
            </s-section>
          )}
        </s-stack>
      </s-scroll-box>
    </s-page>
  );
};
