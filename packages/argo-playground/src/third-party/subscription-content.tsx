import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  extend,
  render,
  useContainer,
  useData,
  useLayout,
  useToast,
  Button,
  Card,
  CardSection,
  Checkbox,
  Link,
  ResourceItem,
  ResourceList,
  Stack,
  StackItem,
  Text,
  ProductSubscriptionExtensionPoint,
} from '@shopify/argo-admin-react';

function Subscription({
  extensionPoint,
  children,
}: React.PropsWithChildren<{extensionPoint: ProductSubscriptionExtensionPoint}>) {
  const type = useMemo(() => {
    switch (extensionPoint) {
      case 'Admin::Product::SubscriptionPlan::Add':
        return 'Add';
      case 'Admin::Product::SubscriptionPlan::Edit':
        return 'Edit';
      case 'Admin::Product::SubscriptionPlan::Remove':
        return 'Remove';
      default:
        return 'Create';
    }
  }, [extensionPoint]);

  const {productId} = useData<typeof extensionPoint>();
  const {show: showToast} = useToast();
  const {done, close, ...containerActions} = useContainer<typeof extensionPoint>();
  const setPrimaryAction = (containerActions as any).setPrimaryAction;
  const setSecondaryAction = (containerActions as any).setSecondaryAction;

  const onSuccess = useCallback(() => {
    showToast(`${type} Success`);
    done();
  }, [done, type, showToast]);
  const onCancel = useCallback(() => {
    showToast(`${type} Cancelled`, {error: true});
    close();
  }, [showToast, type, close]);

  useEffect(() => {
    if (!setPrimaryAction) return;
    setPrimaryAction({
      content: type,
      onAction: onSuccess,
    });
  }, [type, onSuccess, setPrimaryAction]);

  useEffect(() => {
    if (!setSecondaryAction) return;
    setSecondaryAction({
      content: 'Cancel',
      onAction: onCancel,
    });
  }, [onCancel, setSecondaryAction]);

  const childrenOrDefault = children ? (
    children
  ) : (
    <Stack vertical>
      <Stack distribution="center">
        <Text size="titleMedium">{`${type} cool thing from product with Id: ${productId}`}</Text>
      </Stack>
    </Stack>
  );

  return <>{childrenOrDefault}</>;
}

function AddSubscription() {
  const dataList = [1, 2, 3, 4, 5, 12, 13, 145];
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [listItems, setListItems] = useState(dataList);

  const [resourceListQuery, setResourceListQuery] = useState('');
  const resourceListFilterControl = useMemo(
    () => ({
      queryValue: resourceListQuery,
      queryPlaceholder: 'Search...',
      onQueryChange: (query) => {
        setResourceListQuery(query);
        setListItems(dataList.filter((item) => item.toString().includes(query)));
      },
      onQueryClear: () => {
        setResourceListQuery('');
        setListItems(dataList);
      },
    }),
    [resourceListQuery, dataList],
  );

  const {show: showToast} = useToast();
  const {close, setPrimaryAction, setSecondaryAction} = useContainer<
    'Admin::Product::SubscriptionPlan::Add'
  >();

  useEffect(() => {
    setPrimaryAction({
      content: 'Select',
      onAction: () => {
        showToast(`Subscription plans selected: ${selectedItems.join(', ')}`);
        close();
      },
    });
    setSecondaryAction({
      content: 'Cancel',
      onAction: () => {
        showToast(`Add plan cancelled`, {error: true});
        close();
      },
    });
  }, [close, setPrimaryAction, setSecondaryAction, selectedItems, showToast]);

  return (
    <>
      <Subscription extensionPoint="Admin::Product::SubscriptionPlan::Add">
        <ResourceList filterControl={resourceListFilterControl}>
          {listItems.map((item, index) => (
            <ResourceItem
              key={index}
              id={`${index}`}
              onPress={() => {
                console.log('ResourceList item toggle:', item);
                if (selectedItems.includes(item)) {
                  setSelectedItems(selectedItems.filter((_item) => _item !== item));
                } else {
                  setSelectedItems(selectedItems.concat(item));
                }
              }}
            >
              <Stack alignment="center">
                <Checkbox checked={selectedItems.includes(item)} />
                <StackItem fill>Every {item} week or 15 days * 20-25% off</StackItem>
                <Text>{item} product</Text>
              </Stack>
            </ResourceItem>
          ))}
        </ResourceList>
      </Subscription>
    </>
  );
}

function EditSubscription() {
  const layout = useLayout();
  const {show: showToast} = useToast();
  const {close, done} = useContainer<'Admin::Product::SubscriptionPlan::Edit'>();

  const onSuccess = useCallback(() => {
    showToast('Saved');
    done();
  }, [done, showToast]);

  const onCancel = useCallback(() => {
    showToast('Edit Cancelled', {error: true});
    close();
  }, [close, showToast]);

  const primaryActionButton = useMemo(() => <Button title="Save" onPress={onSuccess} primary />, [
    onSuccess,
  ]);
  const secondaryActionButton = useMemo(() => <Button title="Cancel" onPress={onCancel} />, [
    onCancel,
  ]);

  const pageHeader = useMemo(
    () => (
      <Stack>
        <Text size="titleLarge">My app extension!</Text>
        <Stack distribution="trailing">
          {secondaryActionButton}
          {primaryActionButton}
        </Stack>
      </Stack>
    ),
    [primaryActionButton, secondaryActionButton],
  );

  const pageActions = useMemo(
    () => (
      <Stack spacing="none" distribution="fill">
        {secondaryActionButton}
        <Stack distribution="trailing">{primaryActionButton}</Stack>
      </Stack>
    ),
    [primaryActionButton, secondaryActionButton],
  );

  return (
    <Subscription extensionPoint="Admin::Product::SubscriptionPlan::Edit">
      {pageHeader}
      <Card sectioned>
        <CardSection>
          <Text>
            This is an example of an app extension inside a full screen container, we are calling it
            "App Overlay" for the time being. This <Link onPress={close}>link</Link> will close the
            the container.
          </Text>
        </CardSection>
        <CardSection title="Current Layout">
          <Text>{layout?.horizontal}</Text>
        </CardSection>
      </Card>
      {pageActions}
    </Subscription>
  );
}

extend(
  'Admin::Product::SubscriptionPlan::Edit',
  render(() => <EditSubscription />),
);
extend(
  'Admin::Product::SubscriptionPlan::Remove',
  render(() => <Subscription extensionPoint="Admin::Product::SubscriptionPlan::Remove" />),
);
extend(
  'Admin::Product::SubscriptionPlan::Add',
  render(() => <AddSubscription />),
);
extend(
  'Admin::Product::SubscriptionPlan::Create',
  render(() => <Subscription extensionPoint="Admin::Product::SubscriptionPlan::Create" />),
);
