import React from 'react';
import {extend, render, useLocale, Text} from '@shopify/admin-ui-extensions-react';

function App() {
  const locale = useLocale();

  return <Text>{`My current locale is: ${locale}`}</Text>;
}

extend(
  'Admin::Product::SubscriptionPlan::Add',
  render(() => <App />),
);
