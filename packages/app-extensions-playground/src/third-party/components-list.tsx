import React, {useState} from 'react';

import {render, ExtensionPoint} from '@shopify/app-extensions-renderer';
import {
  Card,
  Icon,
  Page,
  Stack,
  TextField,
  Text,
} from '@shopify/app-extensions-polaris-components/client';

render(ExtensionPoint.AppLink, () => <App />);

function App() {
  const [name, setName] = useState('');

  return (
    <Page
      title="Nest camera"
      thumbnail={{
        source: 'https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg',
        alt: 'Black leather pet collar',
      }}
    >
      <Icon source="starFilled" color="yellow" />
      <Icon source="starHollow" />
      <Card sectioned title="Cool card">
        <Stack spacing="loose" vertical>
          <TextField label="Name" value={name} onAfterChange={setName} />

          <Text>Hello {name}</Text>

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
        </Stack>
      </Card>
    </Page>
  );
}
