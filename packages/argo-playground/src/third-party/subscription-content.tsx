import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  render,
  useContainer,
  useData,
  useLayout,
  useToast,
  Card,
  CardSection,
  Checkbox,
  ExtensionPoint,
  Link,
  Page,
  ResourceItem,
  ResourceList,
  Stack,
  StackItem,
  Text,
  SubscriptionManagementExtensionPoint,
} from '@shopify/argo-admin-react';

function Subscription({
  extensionPoint,
  children,
}: React.PropsWithChildren<{extensionPoint: SubscriptionManagementExtensionPoint}>) {
  const type = useMemo(() => {
    switch (extensionPoint) {
      case ExtensionPoint.SubscriptionManagementAdd:
        return 'Add';
      case ExtensionPoint.SubscriptionManagementEdit:
        return 'Edit';
      case ExtensionPoint.SubscriptionManagementRemove:
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
    close();
  }, [done, close, type, showToast]);
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

  return (
    <Stack vertical>
      {children ? (
        children
      ) : (
        <Stack distribution="center">
          <Text size="titleMedium">{`${type} cool thing from product with Id: ${productId}`}</Text>
        </Stack>
      )}
    </Stack>
  );
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
      onQueryChange: (q) => {
        setResourceListQuery(q);
        setListItems(dataList.filter((r) => r.toString().includes(q)));
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
    typeof ExtensionPoint.SubscriptionManagementAdd
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
      <Subscription extensionPoint={ExtensionPoint.SubscriptionManagementAdd}>
        <ResourceList filterControl={resourceListFilterControl}>
          {listItems.map((item, index) => (
            <ResourceItem
              key={index}
              id={`${index}`}
              onClick={() => {
                console.log('ResourceList item toggle:', item);
                if (selectedItems.includes(item)) {
                  setSelectedItems(selectedItems.filter((o) => o !== item));
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
  const {close, done} = useContainer<typeof ExtensionPoint.SubscriptionManagementEdit>();

  const onSuccess = useCallback(() => {
    showToast('Saved');
    done();
    close();
  }, [done, close, showToast]);

  const onCancel = useCallback(() => {
    showToast('Edit Cancelled', {error: true});
    close();
  }, [showToast, close]);

  const pageProps = {
    primaryAction: {
      content: 'Save',
      onAction: onSuccess,
    },
    secondaryActions: [
      {
        content: 'Cancel',
        onAction: onCancel,
      },
    ],
  };

  return (
    <Subscription extensionPoint={ExtensionPoint.SubscriptionManagementEdit}>
      <Page title="My app extension!" {...pageProps}>
        <Card sectioned>
          <CardSection>
            <Text>
              This is an example of an app extension inside a full screen container, we are calling
              it "App Chrome" for the time being. This <Link onClick={close}>link</Link> will close
              the container.
            </Text>
          </CardSection>
          <CardSection title="Current Layout">
            <Text>{layout?.horizontal}</Text>
          </CardSection>
        </Card>
      </Page>
    </Subscription>
  );
}

render(ExtensionPoint.SubscriptionManagementEdit, () => <EditSubscription />);
render(ExtensionPoint.SubscriptionManagementRemove, () => (
  <Subscription extensionPoint={ExtensionPoint.SubscriptionManagementRemove} />
));
render(ExtensionPoint.SubscriptionManagementAdd, () => <AddSubscription />);
render(ExtensionPoint.SubscriptionManagementCreate, () => (
  <Subscription extensionPoint={ExtensionPoint.SubscriptionManagementCreate} />
));
