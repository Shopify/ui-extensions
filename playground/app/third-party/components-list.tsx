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

      <Text size="titleExtraLarge">Titles (Extra Large)</Text>
      <Text size="titleLarge">Large Title Text</Text>
      <Text size="titleMedium">Medium Title Text</Text>
      <Text size="titleSmall">Some more text here</Text>
      <Text size="medium">The most regualr type of text there is.</Text>
      <Text size="small">I is such smallz</Text>

      <Text size="titleExtraLarge">Colours</Text>

      <Text color="success">Super success text!</Text>
      <Text color="error">Womp womp... this is an error...</Text>
      <Text color="secondary">Can't always be first</Text>

      <Text size="small" color="success">
        I is cool colours and smallz
      </Text>
      <Text size="titleLarge" color="secondary">
        Secondary title with color
      </Text>

      <Text size="titleExtraLarge">Alignment</Text>
      <Text alignment="left">Left behind.</Text>
      <Text alignment="right">Right on time!</Text>
      <Text alignment="center">Right smack in the middle!</Text>
      <Text alignment="justify">
        The Justice League brings justified justice upon the bad guys!
      </Text>
      <Text alignment="center" size="titleMedium" color="success">
        Green, centered and IN YO FACE!
      </Text>
    </Card>
  );
}
