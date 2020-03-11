import {
  Badge,
  Button,
  Card,
  Checkbox,
  Icon,
  IconProps,
  Page,
  Stack,
  Text,
  TextField,
} from '@shopify/app-extensions-polaris-components/client';
import {ExtensionPoint, render} from '@shopify/app-extensions-renderer';
import React, {useState} from 'react';

render(ExtensionPoint.AppLink, () => <App />);

const SORT_ICON: IconProps = {
  source: 'sortMinor',
};

function App() {
  const [name, setName] = useState('');
  const [noLabelChecked, setNoLabelChecked] = useState(false);
  const [fooChecked, setFooChecked] = useState(false);
  const [barChecked, setBarChecked] = useState(false);

  return (
    <Page
      title="Nest camera"
      thumbnail={{
        source: 'https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg',
        alt: 'Black leather pet collar',
      }}
    >
      <Card sectioned title="Badge component">
        <Stack>
          <Badge message="Published" />
          <Badge message="Published" status="attention" />
          <Badge message="Published" status="info" />
          <Badge message="Published" status="new" />
          <Badge message="Published" status="success" />
          <Badge message="Published" status="warning" />
        </Stack>
      </Card>
      <Card sectioned title="Button component">
        <Stack>
          <Button title="Sort" icon={SORT_ICON} />
          <Button title="Delete" />
          <Button title="Publish review" primary />
        </Stack>
      </Card>
      <Card sectioned title="Checkbox component">
        <Stack>
          <Checkbox checked={noLabelChecked} onChange={newValue => setNoLabelChecked(newValue)} />
          <Checkbox
            label="Foo"
            checked={fooChecked}
            onChange={newValue => setFooChecked(newValue)}
          />
          <Checkbox
            label="Bar"
            checked={barChecked}
            onChange={newValue => setBarChecked(newValue)}
          />
        </Stack>
      </Card>
      <Card sectioned title="Icon component">
        <Stack>
          <Icon source="starFilled" color="yellow" />
          <Icon source="starHollow" />
        </Stack>
      </Card>
      <Card sectioned title="Text component">
        <Stack spacing="loose" vertical>
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
      <Card sectioned title="TextField component">
        <TextField label="Name" value={name} onAfterChange={setName} />
        {name && <Text>Hello {name}</Text>}
      </Card>
    </Page>
  );
}
