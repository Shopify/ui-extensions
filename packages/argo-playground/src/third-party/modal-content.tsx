import React, {useEffect, useMemo, useState} from 'react';
import {
  Checkbox,
  ExtensionPoint,
  ResourceItem,
  ResourceList,
  Stack,
  StackItem,
  Text,
  SubscriptionManangementExtensionPoint,
} from '@shopify/argo-admin';
import {render, useContainer, useData, useToast} from '@shopify/argo-admin/react';

function Subscription({
  extensionPoint,
  children,
}: React.PropsWithChildren<{extensionPoint: SubscriptionManangementExtensionPoint}>) {
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
  const container = useContainer();
  const {show: showToast} = useToast();

  useEffect(() => {
    const {close, done, setPrimaryAction, setSecondaryAction} = container;
    setPrimaryAction({
      content: type,
      onAction: () => {
        showToast(`${type} Success`);
        done();
        close();
      },
    });

    setSecondaryAction({
      content: 'Cancel',
      onAction: () => {
        showToast(`${type} Cancelled`, {error: true});
        close();
      },
    });
  }, [container, type, showToast, extensionPoint]);

  return (
    <>
      {children ? (
        children
      ) : (
        <Stack distribution="center">
          <Text size="titleMedium">{`${type} cool thing from product with Id: ${productId}`}</Text>
        </Stack>
      )}
    </>
  );
}

function EditSubscription() {
  const dataList = [1, 2, 3, 4, 5, 12, 13, 145];
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [listItems, setListItems] = useState(dataList);

  const container = useContainer();

  const {show: showToast} = useToast();

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

  useEffect(() => {
    const {close, done, setPrimaryAction, setSecondaryAction} = container;
    setPrimaryAction({
      content: 'Next',
      onAction: () => {
        showToast('Success');
        done();
        close();
      },
    });

    setSecondaryAction({
      content: 'Back',
      onAction: () => {
        showToast('Cancelled', {error: true});
        close();
      },
    });
  }, [container, showToast]);

  return (
    <Subscription extensionPoint={ExtensionPoint.SubscriptionManagementEdit}>
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
  );
}

render(ExtensionPoint.SubscriptionManagementEdit, () => <EditSubscription />);
render(ExtensionPoint.SubscriptionManagementRemove, () => (
  <Subscription extensionPoint={ExtensionPoint.SubscriptionManagementRemove} />
));
render(ExtensionPoint.SubscriptionManagementAdd, () => (
  <Subscription extensionPoint={ExtensionPoint.SubscriptionManagementAdd} />
));
render(ExtensionPoint.SubscriptionManagementCreate, () => (
  <Subscription extensionPoint={ExtensionPoint.SubscriptionManagementCreate} />
));
