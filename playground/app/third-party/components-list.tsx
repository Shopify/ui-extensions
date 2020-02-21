import React from 'react';

import {render} from '@shopify/remote-ui-react';
import {registerRender, RenderRoot} from '@shopify/app-extensions-renderer';
import {Card, Stack, TextField, Text} from '@shopify/app-extensions-polaris-components/dist/client';

registerRender(RenderRoot.Default, root => {
  render(<App />, root);
});

function App() {
  return (
    <Card sectioned title="Cool card">
      <Stack spacing="loose" distribution="fill">
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor{' '}
          <Text variation="positive">incididunt ut labore</Text> et dolore magna aliqua. Amet est
          placerat in egestas erat. Mattis pellentesque id nibh tortor. Massa vitae tortor
          condimentum lacinia quis vel.
        </Text>
        <Stack vertical>
          <TextField label="Name" />
          <TextField label="Description" />
        </Stack>
      </Stack>
      <Text variation="subdued">Some more text here</Text>
    </Card>
  );
}
