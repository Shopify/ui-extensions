import {useEffect, useState} from 'react';
import {
  reactExtension,
  Checkbox,
  useApi,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const {storage} = useApi();
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
    <Checkbox
      id="tos"
      name="tos"
      onChange={cacheConsent}
      checked={tosConsent}
    >
      I agree with the terms of service
    </Checkbox>
  );
}
