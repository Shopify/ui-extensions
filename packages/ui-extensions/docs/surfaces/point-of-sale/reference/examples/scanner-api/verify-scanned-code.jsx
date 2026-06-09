import {render} from 'preact';
import {useState, useEffect, useRef} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  const [state, setState] = useState('scanning'); // scanning | loading | success | error
  const [errorMessage, setErrorMessage] = useState('');
  const lastScannedRef = useRef('');

  useEffect(() => {
    shopify.scanner.showCameraScanner();

    const unsubscribe = shopify.scanner.scannerData.current.subscribe(
      async (scan) => {
        if (!scan.data || scan.data === lastScannedRef.current) {
          return;
        }

        lastScannedRef.current = scan.data;
        setState('loading');
        shopify.scanner.hideCameraScanner();

        try {
          // Replace with your actual backend verification call
          // const response = await fetch(`/api/verify?code=${scan.data}`);
          // const data = await response.json();
          // const valid = data.valid;
          const valid = true;

          if (valid) {
            setState('success');
            shopify.toast.show('Verified');
          } else {
            setErrorMessage('Code is not valid');
            setState('error');
          }
        } catch {
          setErrorMessage('Network error. Try again.');
          setState('error');
        }
      },
    );

    return () => {
      unsubscribe();
      shopify.scanner.hideCameraScanner();
    };
  }, []);

  const resetScanner = () => {
    lastScannedRef.current = '';
    setErrorMessage('');
    setState('scanning');
    shopify.scanner.showCameraScanner();
  };

  if (state === 'loading') {
    return (
      <s-page heading="Verifying...">
        <s-stack direction="block" block-alignment="center">
          <s-spinner />
        </s-stack>
      </s-page>
    );
  }

  if (state === 'success') {
    return (
      <s-page heading="Verified">
        <s-stack direction="block" gap="loose">
          <s-banner title="Code accepted" variant="confirmation" />
          <s-button onclick={resetScanner}>Scan next</s-button>
        </s-stack>
      </s-page>
    );
  }

  if (state === 'error') {
    return (
      <s-page heading="Error">
        <s-stack direction="block" gap="loose">
          <s-banner title={errorMessage} variant="critical" />
          <s-button onclick={resetScanner}>Try again</s-button>
        </s-stack>
      </s-page>
    );
  }

  // state === 'scanning' — camera overlay is shown by showCameraScanner()
  return <s-page heading="Scan a code" />;
};
