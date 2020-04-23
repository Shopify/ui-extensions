import React, {useCallback, useState, useMemo} from 'react';
import {
  Badge,
  Banner,
  Button,
  Card,
  CardSection,
  Checkbox,
  Clickable,
  Icon,
  IconProps,
  Modal,
  Link,
  Page,
  ResourceItem,
  ResourceList,
  Select,
  SelectProps,
  Spinner,
  Stack,
  StackItem,
  Text,
  TextField,
} from '@shopify/app-extensions-polaris-components/client';
import {ExtensionPoint, render, useLayout, useSessionToken} from '@shopify/app-extensions-renderer';

const SORT_ICON: IconProps = {
  source: 'sortMinor',
};

const SELECTS: SelectProps['options'] = [
  {label: 'Today', value: 'today'},
  {label: 'Yesterday', value: 'yesterday'},
  {label: 'Last 7 days', value: 'lastWeek'},
];

function App() {
  const [name, setName] = useState('');
  const clearName = useCallback(() => setName(''), []);
  const [search, setSearch] = useState('');
  const [review, setReview] = useState('');
  const [numberValue, setNumberValue] = useState('0');
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

  const bannerDismissCallback = useCallback(() => console.log('Dismiss banner'), []);
  const bannerActionCallback = useCallback(() => console.log('Action Clicked'), []);

  const [cardPrimaryFooterValue, setCardPrimaryFooterValue] = useState('N/A');
  const [cardSecondaryFooterValue, setCardSecondaryFooterValue] = useState('N/A');

  const [buttonValue, setButtonValue] = useState(0);
  const onButtonClick = useCallback(() => {
    setButtonValue(value => value + 1);
  }, []);

  const layout = useLayout();

  const [selectValue, setSelectValue] = useState('today');
  const onSelectChange = useCallback(newValue => {
    setSelectValue(newValue);
  }, []);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalShowPrimayAction, setModalShowPrimayAction] = useState(false);
  const [modalShowSecondaryAction, setModalShowSecondaryAction] = useState(false);
  const [modalShowSecondaryActions, setModalShowSecondaryActions] = useState(false);
  const modalPrimaryAction = useMemo(() => {
    return modalShowPrimayAction
      ? {
          content: 'Done',
          onAction: () => setModalOpen(false),
        }
      : undefined;
  }, [modalShowPrimayAction]);
  const modalSecondaryActions = useMemo(() => {
    const actions = [
      {
        content: 'Cancel',
        onAction: () => setModalOpen(false),
      },
    ];
    if (modalShowSecondaryActions) {
      actions.push({
        content: 'Foo',
        onAction: () => setModalOpen(false),
      });
      return actions;
    }
    if (modalShowSecondaryAction) {
      return actions;
    }
    return undefined;
  }, [modalShowSecondaryAction, modalShowSecondaryActions]);

  const linkAction = useCallback(() => {
    console.log('Link clicked');
  }, []);

  const {getSessionToken} = useSessionToken();
  const [sessionToken, setSessionToken] = useState('');

  const dataList = [1, 2, 3, 4, 5, 12, 13, 145];
  const [listItems, setListItems] = useState(dataList);

  const [resourceListQuery, setResourceListQuery] = useState('');
  const resourceListFilterControl = useMemo(
    () => ({
      queryValue: resourceListQuery,
      queryPlaceholder: 'Search...',
      onQueryChange: q => {
        setResourceListQuery(q);
        setListItems(dataList.filter(r => r.toString().includes(q)));
      },
      onQueryClear: () => {
        setResourceListQuery('');
      },
    }),
    [resourceListQuery],
  );

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
      <Card sectioned title="Banner component">
        <Stack>
          <Banner title="Regular Banner" onDismiss={bannerDismissCallback}>
            Some super cool content for you in a banner. This is important stuff. Read this or you
            will not know the joys of knowing more about what this banner has to inform you of.
          </Banner>
          <Banner title="Critical Banner" status="critical" onDismiss={bannerDismissCallback}>
            Some super cool content for you in a banner. This is important stuff. Read this or you
            will not know the joys of knowing more about what this banner has to inform you of.
          </Banner>
          <Banner title="Info Banner" status="info" onDismiss={bannerDismissCallback}>
            Some super cool content for you in a banner. This is important stuff. Read this or you
            will not know the joys of knowing more about what this banner has to inform you of.
          </Banner>
          <Banner title="Success Banner" status="success" onDismiss={bannerDismissCallback}>
            Some super cool content for you in a banner. This is important stuff. Read this or you
            will not know the joys of knowing more about what this banner has to inform you of.
          </Banner>
          <Banner title="Warning Banner" status="warning" onDismiss={bannerDismissCallback}>
            Some super cool content for you in a banner. This is important stuff. Read this or you
            will not know the joys of knowing more about what this banner has to inform you of.
          </Banner>
          <Banner
            title="Action Banner"
            action={{content: 'Click me', onAction: bannerActionCallback}}
            onDismiss={bannerDismissCallback}
          >
            Some super cool content for you in a banner. This is important stuff. Read this or you
            will not know the joys of knowing more about what this banner has to inform you of.
          </Banner>
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
      <Card title="CardSection component">
        <CardSection title="CardSection 1">
          <Text>Foo</Text>
        </CardSection>
        <CardSection title="CardSection 2">
          <Text>Bar</Text>
        </CardSection>
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
          <Icon source="cancelSmallMirror" />
          <Icon source="searchMinor" />
          <Icon source="starHollow" />
          <Icon source="starFilled" />
          <Icon source="starFilled" color="yellow" />
          <Icon source="sortMinor" />
        </Stack>
      </Card>
      <Card sectioned title="Link">
        <Stack>
          <Link url="/product-reviews">Link to Product Reviews</Link>
          <Link url="/product-reviews" external>
            Link to Product Reviews in new tab
          </Link>
          <Link onClick={linkAction}>Link that triggers log</Link>
        </Stack>
      </Card>
      <Card sectioned title="Modal component">
        <Stack vertical>
          <Checkbox
            label="Show primary action"
            checked={modalShowPrimayAction}
            onChange={setModalShowPrimayAction}
          />
          <Checkbox
            label="Show seondary action"
            checked={modalShowSecondaryAction}
            onChange={setModalShowSecondaryAction}
          />
          <Checkbox
            label="Show seondary actions"
            checked={modalShowSecondaryActions}
            onChange={setModalShowSecondaryActions}
          />
          <Button title="Open modal" onClick={() => setModalOpen(true)} />
        </Stack>
        <Modal
          title="Edit subscription plan"
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          primaryAction={modalPrimaryAction}
          secondaryActions={modalSecondaryActions}
        >
          <TextField label="Custom plan title" />
        </Modal>
      </Card>
      <Card title="ResourceList component">
        <ResourceList filterControl={resourceListFilterControl}>
          {listItems.map((item, index) => (
            <ResourceItem
              key={index}
              id={index}
              onClick={() => console.log('ResourceList item click:', item)}
            >
              <Stack alignment="center">
                <Checkbox />
                <StackItem fill>Every {item} week or 15 days * 20-25% off</StackItem>
                <Text>{item} product</Text>
              </Stack>
            </ResourceItem>
          ))}
        </ResourceList>
      </Card>
      <Card title="Select component">
        <CardSection title="Default">
          <Select
            label="Date range"
            options={SELECTS}
            value={selectValue}
            onChange={onSelectChange}
          />
        </CardSection>
        <CardSection title="LabelInline">
          <Select
            labelInline
            label="Date range"
            options={SELECTS}
            value={selectValue}
            onChange={onSelectChange}
          />
        </CardSection>
        <CardSection title="No label">
          <Select label="" options={SELECTS} value={selectValue} onChange={onSelectChange} />
        </CardSection>
      </Card>
      <Card sectioned title="Spinner component">
        <Spinner />
      </Card>
      <Card title="Stack component">
        <CardSection>
          <Stack>
            <StackItem fill>
              <TextField type="search" placeholder="Search for reviews" />
            </StackItem>
            <StackItem>
              <Button title="Sort" icon={SORT_ICON} />
            </StackItem>
          </Stack>
        </CardSection>
        <CardSection title="Default">
          <Stack>
            <Icon source="starFilled" color="yellow" />
            <Icon source="starFilled" color="yellow" />
            <Icon source="starHollow" />
          </Stack>
        </CardSection>
        <CardSection title="Spacing none">
          <Stack spacing="none">
            <Icon source="starFilled" color="yellow" />
            <Icon source="starFilled" color="yellow" />
            <Icon source="starHollow" />
          </Stack>
        </CardSection>
        <CardSection title="Distribution fill">
          <Stack distribution="fill">
            <Icon source="starFilled" color="yellow" />
            <Icon source="starFilled" color="yellow" />
            <Icon source="starHollow" />
          </Stack>
        </CardSection>
        <CardSection title="Distribution center">
          <Stack distribution="center">
            <Icon source="starFilled" color="yellow" />
            <Icon source="starFilled" color="yellow" />
            <Icon source="starHollow" />
          </Stack>
        </CardSection>
        <CardSection title="Vertical">
          <Stack vertical>
            <Icon source="starFilled" color="yellow" />
            <Icon source="starFilled" color="yellow" />
            <Icon source="starHollow" />
          </Stack>
        </CardSection>
        <CardSection title="StackItem fill">
          <Stack>
            <Icon source="starFilled" color="yellow" />
            <StackItem fill>
              <Stack>
                <StackItem>
                  <Text>Foo</Text>
                </StackItem>
                <StackItem fill />
                <StackItem>
                  <Text>Bar</Text>
                </StackItem>
              </Stack>
            </StackItem>
            <Icon source="starHollow" />
          </Stack>
        </CardSection>
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
        <Stack vertical>
          <TextField
            label="Name"
            placeholder="Type your name"
            value={name}
            onAfterChange={setName}
            clearButton
            onClearButtonClick={clearName}
          />
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
          <TextField type="number" value={numberValue} onAfterChange={setNumberValue} />
          <TextField value="Inline error" error="This field is invalid" />
          <TextField value="42" type="number" suffix="%" label="A real percent" />
          <TextField value="stuff around" prefix="Only the best" label="Cool things" />
          <TextField
            type="search"
            value="cool tech"
            prefix="I'm interested in"
            label="Search prefix"
          />
        </Stack>
      </Card>
      <Card sectioned title="useLayout">
        <Text>{JSON.stringify(layout) || 'undefined'}</Text>
      </Card>
      <Card sectioned title="useSessionInput">
        <Stack>
          <Button
            title="Generate new sessionToken"
            onClick={() =>
              getSessionToken().then(newSessionToken => setSessionToken(newSessionToken))
            }
          />
          <Text>{sessionToken}</Text>
        </Stack>
      </Card>
    </Page>
  );
}

render(ExtensionPoint.Playground, () => <App />);
