import React, {useMemo, useCallback, useState, useEffect} from 'react';
import {
  Button,
  Checkbox,
  ExtensionPoint,
  ResourceItem,
  ResourceList,
  Stack,
  StackItem,
  Text,
  SubscriptionManagementExtensionPoint,
} from '@shopify/argo-admin';
import {render, useContainer, useData, useToast} from '@shopify/argo-admin/react';

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

  const isAppChrome =
    extensionPoint === ExtensionPoint.SubscriptionManagementCreate ||
    extensionPoint === ExtensionPoint.SubscriptionManagementEdit;
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

  const actions = isAppChrome ? (
    <Stack distribution="trailing">
      <Button title="Cancel" onClick={onCancel} />
      <Button primary title={type} onClick={onSuccess} />
    </Stack>
  ) : null;

  return (
    <Stack vertical>
      {children ? (
        children
      ) : (
        <Stack distribution="center">
          <Text size="titleMedium">{`${type} cool thing from product with Id: ${productId}`}</Text>
        </Stack>
      )}
      {actions}
    </Stack>
  );
}

function EditSubscription() {
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

  return (
    <>
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
    </>
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
