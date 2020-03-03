import React from 'react';

import {render, ExtensionPoint} from '@shopify/app-extensions-renderer';
import {
  Card,
  Page,
  Stack,
  TextField,
  Text,
} from '@shopify/app-extensions-polaris-components/client';

render(ExtensionPoint.AppLink, root => <App />);

function App() {
  return (
    <Page
      title="Nest camera"
      thumbnail={{
        source: 'https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg',
        alt: 'Black leather pet collar',
      }}
    >
      <Card sectioned title="Cool card">
        <Stack spacing="loose" distribution="fill">
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor{' '}
            <Text size="titleLarge">incididunt ut labore</Text> et dolore magna aliqua. Amet est
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
    </Page>
  );
}
