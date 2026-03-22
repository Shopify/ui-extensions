import React, {useState} from 'react';
import {
  reactExtension,
  useApi,
} from '@shopify/ui-extensions-react/customer-account';
import {Button} from '@shopify/ui-extensions/customer-account';

export default reactExtension(
  'customer-account.order-status.block.render',
  () => <Extension />,
);

function Extension() {
  const {requireLogin} = useApi<'customer-account.order-status.block.render'>();
  const [loading, setLoading] = useState(false);

  async function handleAction() {
    setLoading(true);
    await requireLogin();
    setLoading(false);
  }

  return <Button disabled={loading} onPress={handleAction}>Report an issue</Button>;
}
