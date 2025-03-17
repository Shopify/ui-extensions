import {
  Page,
  Button,
  reactExtension,
} from '@shopify/ui-extensions-react/customer-account';
import React from 'react';

export default reactExtension('customer-account.page.render', () => <App />);

function App() {
  return (
    <Page
      heading="Order #1411"
      subheading="Confirmed Oct 5"
      breadcrumbActions={
        <Button
          accessibilityLabel="Button"
          onPress={() => {}}
        />
      }
      primaryAction={
        <Button onPress={() => {}}>
          Buy again
        </Button>
      }
      secondaryActions={
        <>
          <Button onPress={() => {}}>
            First secondary action
          </Button>
          <Button onPress={() => {}}>
            Second secondary action
          </Button>
        </>
      }
    >
      Content
    </Page>
  );
}
