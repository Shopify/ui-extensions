import React from 'react';
import {extend, render, Text} from '@shopify/argo-admin-react';

function App() {
  return <Text size="titleMedium">From 3p code</Text>;
}

extend(
  'Playground',
  render(() => <App />),
);
extend(
  'Admin::Product::SubscriptionPlan::Add',
  render(() => <App />),
);
extend(
  'Admin::Product::SubscriptionPlan::Create',
  render(() => <App />),
);
extend(
  'Admin::Product::SubscriptionPlan::Edit',
  render(() => <App />),
);
extend(
  'Admin::Product::SubscriptionPlan::Remove',
  render(() => <App />),
);
