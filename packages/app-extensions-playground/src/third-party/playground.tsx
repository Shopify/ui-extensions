import React from 'react';
import {render, ExtensionPoint} from '@shopify/app-extensions-renderer';
import {
  Card,
  Text,
  Stack,
  Button,
  StackItem,
  IconProps,
} from '@shopify/app-extensions-polaris-components/client';

render(ExtensionPoint.AppLink, () => <App />);

const SORT_ICON: IconProps = {
  source: 'sortMinor',
};

function App() {
  return (
    <Card sectioned title="Stack component">
      <Stack>
        <StackItem>
          <Text>Hello</Text>
        </StackItem>
        <StackItem fill>
          <Text>Moto</Text>
        </StackItem>
        <StackItem>
          <Text>Foo</Text>
        </StackItem>
      </Stack>
    </Card>
  );
}
