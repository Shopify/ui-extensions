import React from 'react';
import {extend, render, useLayout, Text} from '@shopify/admin-ui-extensions-react';

function App() {
  const layout = useLayout();

  return <Text>{`The current layout is: ${layout.horizontal}`}</Text>;
}

extend(
  'Admin::Product::SubscriptionPlan::Add',
  render(() => <App />),
);
