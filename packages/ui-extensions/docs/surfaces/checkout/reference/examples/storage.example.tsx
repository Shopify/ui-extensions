import {render} from 'preact';
import {useEffect, useState} from 'preact/hooks';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  const {storage} = shopify;
  const [tosConsent, setTosConsent] =
    useState(false);

  useEffect(() => {
    async function readFromStorage() {
      const tosConsent = await storage.read(
        'tos-consent',
      );

      setTosConsent(Boolean(tosConsent));
    }

    readFromStorage();
  }, [storage]);

  async function cacheConsent(value: boolean) {
    setTosConsent(value);
    await storage.write('tos-consent', value);
  }

  return (
    <s-button
      onClick={() => cacheConsent(!tosConsent)}
      variant={
        tosConsent ? 'primary' : 'secondary'
      }
    >
      I agree with the terms of service
    </s-button>
  );
}
