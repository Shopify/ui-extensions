import React, {useCallback, useState} from 'react';
import {
  Badge,
  Button,
  Card,
  Checkbox,
  Clickable,
  Icon,
  IconProps,
  Page,
  Stack,
  StackItem,
  Text,
  TextField,
} from '@shopify/app-extensions-polaris-components/client';
import {ExtensionPoint, render} from '@shopify/app-extensions-renderer';

const SORT_ICON: IconProps = {
  source: 'sortMinor',
};

function App() {
  const [name, setName] = useState('');
  const [search, setSearch] = useState('');
  const [review, setReview] = useState('');
  const [noLabelChecked, setNoLabelChecked] = useState(false);
  const [fooChecked, setFooChecked] = useState(false);
  const [barChecked, setBarChecked] = useState(false);
  const [clickableValue, setClickableValue] = useState('');

  const clickHandlerYellow = useCallback(() => setClickableValue('Yellow Star clicked'), [
    setClickableValue,
  ]);
  const clickHandlerCard = useCallback(() => setClickableValue('Card clicked'), [
    setClickableValue,
  ]);
  const clickHandlerBlue = useCallback(() => setClickableValue('Blue Star clicked'), [
    setClickableValue,
  ]);

  const [cardPrimaryFooterValue, setCardPrimaryFooterValue] = useState('N/A');
  const [cardSecondaryFooterValue, setCardSecondaryFooterValue] = useState('N/A');

  const [buttonValue, setButtonValue] = useState(0);
  const onButtonClick = useCallback(() => {
    setButtonValue(value => value + 1);
  }, []);

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
          <Button title={`Publish review ${buttonValue || ''}`} primary onClick={onButtonClick} />
        </Stack>
      </Card>
      <Card
        sectioned
        title="Card component"
        primaryFooterAction={{
          content: 'Primary Footer',
          onAction: () => {
            setCardPrimaryFooterValue(new Date().toISOString());
          },
        }}
        secondaryFooterActions={[
          {
            content: 'Secondary Footer',
            onAction: () => {
              setCardSecondaryFooterValue(new Date().toISOString());
            },
          },
        ]}
      >
        <Text>PrimaryFooterAction: {cardPrimaryFooterValue}</Text>
        <Text>SecondaryFooterAction: {cardSecondaryFooterValue}</Text>
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
      <Card sectioned title={`Clickable component ${clickableValue ? `(${clickableValue})` : ''}`}>
        <Clickable onClick={clickHandlerCard}>
          <Stack>
            <Clickable onClick={clickHandlerYellow}>
              <Icon source="starFilled" color="yellow" />
            </Clickable>
            <Clickable onClick={clickHandlerBlue}>
              <Icon source="starFilled" color="blue" />
            </Clickable>
            <Text>Click Yellow, Blue star, and me</Text>
          </Stack>
        </Clickable>
      </Card>
      <Card sectioned title="Icon component">
        <Stack>
          <Icon source="starFilled" color="yellow" />
          <Icon source="starHollow" />
        </Stack>
      </Card>
      <Card sectioned title="Stack component">
        <Stack>
          <StackItem fill>
            <TextField type="search" placeholder="Search for reviews" />
          </StackItem>
          <StackItem>
            <Button title="Sort" icon={SORT_ICON} />
          </StackItem>
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

          <Text style="normal">Normal style</Text>
          <Text style="italic">Italic style</Text>
          <Text style="monospace">Monospace style</Text>
          <Text style="strong">Strong style</Text>

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
        <TextField label="Name" placeholder="Type your name" value={name} onAfterChange={setName} />
        {name && <Text>Hello {name}</Text>}
        <TextField
          type="search"
          placeholder="Search for reviews"
          value={search}
          onAfterChange={setSearch}
        />
        <TextField
          placeholder="Add a reply to this review..."
          multiline
          value={review}
          onAfterChange={setReview}
        />
      </Card>
    </Page>
  );
}

render(ExtensionPoint.AppLink, () => <App />);
