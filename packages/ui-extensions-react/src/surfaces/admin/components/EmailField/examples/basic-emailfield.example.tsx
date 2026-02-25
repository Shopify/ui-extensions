import {useState} from 'react';
import {reactExtension, useApi, EmailField, Button, BlockStack, Text} from '@shopify/ui-extensions-react/admin';

function App() {
  const {data, close} = useApi('admin.product-details.action.render');
  const productId = data.selected[0]?.id;
  const [email, setEmail] = useState('');

  return (
    <BlockStack>
      <Text fontWeight="bold">Notification settings</Text>
      <EmailField
        label="Low stock notification email"
        name="notificationEmail"
        value={email}
        onChange={setEmail}
      />
      <Button
        variant="primary"
        onPress={async () => {
          await fetch('/api/notifications/email', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({productId, email}),
          });
          close();
        }}
      >
        Save notification email
      </Button>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.action.render',
  () => <App />,
);
