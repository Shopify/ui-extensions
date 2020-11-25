/**
 * This is a dead simple example of an extension script. This is intended to be
 * loaded in host containers during development.
 */

import React from 'react';
import {extend, render, Stack, Text} from '@shopify/argo-admin-react';

function MyExtension() {
  return (
    <Stack>
      <Text>This is a sample extension!</Text>
    </Stack>
  );
}

// Your extension must render all four modes
extend(
  'Admin::Product::SubscriptionPlan::Add',
  render(() => <MyExtension />),
);
extend(
  'Admin::Product::SubscriptionPlan::Create',
  render(() => <MyExtension />),
);
extend(
  'Admin::Product::SubscriptionPlan::Remove',
  render(() => <MyExtension />),
);
extend(
  'Admin::Product::SubscriptionPlan::Edit',
  render(() => <MyExtension />),
);
